// src/pages/TvDetailsPage.tsx
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import RatingStars from "../components/RatingStars";
import Badge from "../components/Badge";
import CastCard from "../components/CastCard";
import CrewCard from "../components/CrewCard";
import Loader from "../components/Loader";
import PosterCard from "../components/PosterCard";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

type Tv = {
  name: string;
  tagline: string;
  overview: string;
  first_air_date: string;
  number_of_seasons: number;
  number_of_episodes: number;
  vote_average: number;
  poster_path: string | null;
  genres: { id: number; name: string }[];
  created_by: { id: number; name: string }[];
  credits: {
    cast: {
      id: number;
      name: string;
      character: string;
      profile_path: string | null;
    }[];
    crew: { id: number; name: string; job: string }[];
  };
  recommendations: {
    results: {
      id: number;
      name: string;
      poster_path: string | null;
      vote_average: number;
      first_air_date: string;
    }[];
  };
};

function TvDetailsPage() {
  const params = useParams();
  const [tv, setTv] = useState<Tv>();

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchTv = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${params.id}?append_to_response=credits,recommendations`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDg0Nzc3NDg1YzU4ZDY5ZmI4MDEwODQxZWZmZGMzYyIsIm5iZiI6MTc5MDcwNzUxMy42MDYwMDAyLCJzdWIiOiI2YWJjMDczOTlhMjA5NzQzNzUwODIxYTYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.HgpyR-OmPCuud67Z7Lg_Vw6nbfTCSbBVdmBod08pJUg",
          },
        },
      );
      const fetchedTv = await response.json();
      console.log(fetchedTv);
      setTv(fetchedTv);
    };
    fetchTv();
  }, [params.id]);

  if (!tv) return <Loader />;

  const keyJobs = [
    "Director",
    "Writer",
    "Screenplay",
    "Producer",
    "Executive Producer",
    "Director of Photography",
    "Original Music Composer",
  ];

  const crew = tv.credits.crew
    .filter((person) => keyJobs.includes(person.job))
    .slice(0, 12);

  return (
    <div className="tv-details-page">
      {tv.poster_path && (
        <img src={`${IMAGE_URL}${tv.poster_path}`} alt={tv.name} />
      )}

      <h1>{tv.name}</h1>
      <p>{tv.tagline}</p>
      <p>
        {tv.first_air_date.slice(0, 4)} · {tv.number_of_seasons} seasons ·{" "}
        {tv.number_of_episodes} episodes
      </p>
      <RatingStars rating={tv.vote_average} />

      {tv.genres.map((genre) => (
        <Badge key={genre.id}>{genre.name}</Badge>
      ))}

      <h2>Overview</h2>
      <p>{tv.overview}</p>

      <h2>Cast</h2>
      <div className="cast-row">
        {tv.credits.cast.slice(0, 20).map((person) => (
          <CastCard
            key={person.id}
            name={person.name}
            character={person.character}
            profile_path={person.profile_path}
          />
        ))}
      </div>

      <h2>Crew</h2>
      <div className="crew-grid">
        {tv.created_by.map((person) => (
          <CrewCard key={person.id} name={person.name} job="Creator" />
        ))}
        {crew.map((person) => (
          <CrewCard
            key={`${person.id}-${person.job}`}
            name={person.name}
            job={person.job}
          />
        ))}
      </div>

      {tv.recommendations.results.length > 0 && (
        <>
          <h2>More like this</h2>
          <div className="row row-scroll">
            {tv.recommendations.results.map((item) => (
              <PosterCard key={item.id} type="tv" item={item} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default TvDetailsPage;
