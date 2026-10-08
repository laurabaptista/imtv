import MoviesSection from "../components/MoviesSection";
import "./MoviesPage.css";

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
