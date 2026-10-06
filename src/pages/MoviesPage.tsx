import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import PosterCard from "../components/PosterCard";

type Movie = {
  id: number;
  title: string;
  poster_path: string | null;
  vote_average: number;
  release_date: string;
};

function MoviesPage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  console.log("movies", movies);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const request = await fetch(
          "https://api.themoviedb.org/3/movie/popular",
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDg0Nzc3NDg1YzU4ZDY5ZmI4MDEwODQxZWZmZGMzYyIsIm5iZiI6MTc5MDcwNzUxMy42MDYwMDAyLCJzdWIiOiI2YWJjMDczOTlhMjA5NzQzNzUwODIxYTYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.HgpyR-OmPCuud67Z7Lg_Vw6nbfTCSbBVdmBod08pJUg",
            },
          },
        );

        const response = await request.json();
        console.log("response", response);
        setMovies(response.results);
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Movies</h1>

      {loading && <Loader />}

      {!loading &&
        movies.length > 0 &&
        movies.map((movie) => {
          console.log("movie", movie);
          return <PosterCard key={movie.id} movie={movie} />;
        })}

      {!loading && movies.length === 0 && <div>No data</div>}
    </div>
  );
}

export default MoviesPage;
