import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import PosterCard from "../components/PosterCard";

type Show = {
  id: number;
  name: string;
  poster_path: string | null;
  vote_average: number;
  first_air_date: string;
};

type TvCategory = "popular" | "top_rated" | "on_the_air" | "airing_today";

type TvSectionProps = {
  category: TvCategory;
};

const titles: Record<TvCategory, string> = {
  popular: "Popular Series",
  top_rated: "Top Rated",
  on_the_air: "On The Air",
  airing_today: "Airing Today",
};

function TvSection(props: TvSectionProps) {
  const [shows, setShows] = useState<Show[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        setLoading(true);
        const request = await fetch(
          `https://api.themoviedb.org/3/tv/${props.category}`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDg0Nzc3NDg1YzU4ZDY5ZmI4MDEwODQxZWZmZGMzYyIsIm5iZiI6MTc5MDcwNzUxMy42MDYwMDAyLCJzdWIiOiI2YWJjMDczOTlhMjA5NzQzNzUwODIxYTYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.HgpyR-OmPCuud67Z7Lg_Vw6nbfTCSbBVdmBod08pJUg",
            },
          },
        );

        const response = await request.json();
        console.log("response", props.category, response);
        setShows(response.results);
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    };

    fetchShows();
  }, [props.category]);

  return (
    <section>
      <h2>{titles[props.category]}</h2>

      {loading && <Loader />}

      <div className="row">
        {!loading &&
          shows.length > 0 &&
          shows.map((show) => {
            return (
              <PosterCard
                key={show.id}
                type="tv"
                item={{
                  id: show.id,
                  title: show.name,
                  poster_path: show.poster_path,
                  vote_average: show.vote_average,
                  release_date: show.first_air_date,
                }}
              />
            );
          })}
      </div>

      {!loading && shows.length === 0 && <div>No data</div>}
    </section>
  );
}

function TvPage() {
  return (
    <div>
      <TvSection category="popular" />
      <TvSection category="top_rated" />
      <TvSection category="on_the_air" />
      <TvSection category="airing_today" />
    </div>
  );
}

export default TvPage;
