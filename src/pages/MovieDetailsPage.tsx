import { useEffect, useState } from "react";
import { useParams } from "react-router";
import RatingStars from "../components/RatingStars";
import Badge from "../components/Badge";
import CastCard from "../components/CastCard";
import CrewCard from "../components/CrewCard";
import Loader from "../components/Loader";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

type Movie = {
  title: string;
  tagline: string;
  overview: string;
  release_date: string;
  runtime: number;
  vote_average: number;
  poster_path: string | null;
  genres: { id: number; name: string }[];
  credits: {
    cast: {
      id: number;
      name: string;
      character: string;
      profile_path: string | null;
    }[];
    crew: { id: number; name: string; job: string }[];
  };
};

function MovieDetailsPage() {
  const params = useParams();
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?append_to_response=credits`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDg0Nzc3NDg1YzU4ZDY5ZmI4MDEwODQxZWZmZGMzYyIsIm5iZiI6MTc5MDcwNzUxMy42MDYwMDAyLCJzdWIiOiI2YWJjMDczOTlhMjA5NzQzNzUwODIxYTYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.HgpyR-OmPCuud67Z7Lg_Vw6nbfTCSbBVdmBod08pJUg",
          },
        },
      );
      const fetchedMovie = await response.json();
      console.log(fetchedMovie);
      setMovie(fetchedMovie);
    };
    fetchMovie();
  }, [params.id]);

  if (!movie) return <Loader />;

  return (
    <div className="movie-details-page">
      {movie.poster_path && (
        <img src={`${IMAGE_URL}${movie.poster_path}`} alt={movie.title} />
      )}

      <h1>{movie.title}</h1>
      <p>{movie.tagline}</p>
      <p>
        {movie.release_date.slice(0, 4)} · {movie.runtime} min
      </p>
      <RatingStars rating={movie.vote_average} />

      {movie.genres.map((genre) => (
        <Badge key={genre.id}>{genre.name}</Badge>
      ))}

      <h2>Overview</h2>
      <p>{movie.overview}</p>

      <h2>Cast</h2>
      <div className="cast-row">
        {movie.credits.cast.slice(0, 20).map((person) => (
          <CastCard
            key={person.id}
            name={person.name}
            character={person.character}
            profile_path={person.profile_path}
          />
        ))}
      </div>

      <h2>Crew</h2>
      {movie.credits.crew.slice(0, 10).map((person) => (
        <CrewCard
          key={`${person.id}-${person.job}`}
          name={person.name}
          job={person.job}
        />
      ))}
    </div>
  );
}

export default MovieDetailsPage;
