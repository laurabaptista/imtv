import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import TvPage from "./pages/TvPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import TvDetailsPage from "./pages/TvDetailsPage";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/tv" element={<TvPage />} />
          <Route path="/movie/:id" element={<MovieDetailsPage />} />
          <Route path="/tv/:id" element={<TvDetailsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
