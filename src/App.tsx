import { BrowserRouter, Route, Routes } from "react-router";
import MoviesPage from "./pages/MoviesPage";
import TvPage from "./pages/TvPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import TvDetailsPage from "./pages/TvDetailsPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MoviesPage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/tv" element={<TvPage />} />
        <Route path="/movie/:id" element={<MovieDetailsPage />} />
        <Route path="/tv/:id" element={<TvDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
