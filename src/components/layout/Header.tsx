import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/characters">Characters</Link>
        <Link to="/news">News</Link>
        <Link to="/history">History</Link>
        <Link to="/gallery">Gallery</Link>
      </nav>
    </header>
  );
}
