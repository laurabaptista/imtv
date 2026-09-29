import { BrowserRouter, Link, Route, Routes } from "react-router";
import MoviesPage from "./pages/MoviesPage";
import TvPage from "./pages/TvPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import TvDetailsPage from "./pages/TvDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/movies">Movies</Link>
        <Link to="/tv">TV Shows</Link>
      </nav>

      <Routes>
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/tv" element={<TvPage />} />
        <Route path="/movie/:id" element={<MovieDetailsPage />} />
        <Route path="/tv/:id" element={<TvDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
