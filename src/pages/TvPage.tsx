import TvSection from "../components/TvSection";

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
