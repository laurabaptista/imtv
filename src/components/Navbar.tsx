import { Link } from "react-router";
import Button from "./Button";

function Navbar() {
  return (
    <nav>
      <Link to="/movies">
        <Button variant="color1">Movies</Button>
      </Link>
      <Link to="/tv">
        <Button variant="color2">TV Shows</Button>
      </Link>
    </nav>
  );
}

export default Navbar;
