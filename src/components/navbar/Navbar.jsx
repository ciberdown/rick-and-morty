import { Link } from "react-router-dom";
import "./_navbar.scss";

const NavbarRouter = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/characters">Characters</Link>
      <Link to="/locations">Locations</Link>
      <Link to="/episodes">Episodes</Link>
      <Link to="/info">Info</Link>
    </div>
  );
};

export default NavbarRouter;