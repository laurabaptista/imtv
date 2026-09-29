import { Link } from "react-router";

function Navbar() {
  return (
    <nav>
      <Link to="/movies">Movies</Link>
      <Link to="/tv">TV Shows</Link>
    </nav>
  );
}

export default Navbar;
