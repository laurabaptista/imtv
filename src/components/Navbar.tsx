import { Link, NavLink } from "react-router";
import Button from "./Button";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar-wrapper">
      <nav className="navbar container">
        <Link to="/" className="navbar-logo">
          IMTV
        </Link>

        <div className="navbar-links">
          <NavLink to="/movies">
            <Button variant="color2">Movies</Button>
          </NavLink>
          <NavLink to="/tv">
            <Button variant="color2">TV Shows</Button>
          </NavLink>
        </div>

        <div className="navbar-search">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="16.5" y1="16.5" x2="21" y2="21" />
          </svg>
          <input type="text" placeholder="Search..." aria-label="Search" />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
