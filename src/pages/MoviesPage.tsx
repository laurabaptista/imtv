import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import PosterCard from "../components/PosterCard";
import "./MoviesPage.css";

type Movie = {
  id: number;
  title: string;
  poster_path: string | null;
  vote_average: number;
  release_date: string;
};

type MovieCategory = "popular" | "top_rated" | "now_playing" | "upcoming";

type MoviesSectionProps = {
  category: MovieCategory;
};

const titles: Record<MovieCategory, string> = {
  popular: "Popular Movies",
  top_rated: "Top Rated",
  now_playing: "Now Playing",
  upcoming: "Upcoming",
};

function MoviesSection(props: MoviesSectionProps) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const request = await fetch(
          `https://api.themoviedb.org/3/movie/${props.category}`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDg0Nzc3NDg1YzU4ZDY5ZmI4MDEwODQxZWZmZGMzYyIsIm5iZiI6MTc5MDcwNzUxMy42MDYwMDAyLCJzdWIiOiI2YWJjMDczOTlhMjA5NzQzNzUwODIxYTYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.HgpyR-OmPCuud67Z7Lg_Vw6nbfTCSbBVdmBod08pJUg",
            },
          },
        );

        const response = await request.json();
        console.log("response", props.category, response);
        setMovies(response.results);
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [props.category]);

  return (
    <section>
      <h2>{titles[props.category]}</h2>

      {loading && <Loader />}

      <div className="row">
        {!loading &&
          movies.length > 0 &&
          movies.map((movie) => {
            return <PosterCard key={movie.id} movie={movie} />;
          })}
      </div>

      {!loading && movies.length === 0 && <div>No data</div>}
    </section>
  );
}

function MoviesPage() {
  return (
    <div>
      <MoviesSection category="popular" />
      <MoviesSection category="top_rated" />
      <MoviesSection category="now_playing" />
      <MoviesSection category="upcoming" />
    </div>
  );
}

export default MoviesPage;
