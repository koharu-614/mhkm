import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      {/* Bootstrap ナビバー */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            MH-KM
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Top</Link>
              </li>              
              <li className="nav-item">
                <Link className="nav-link" to="/news">News</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/history">History</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/gallery">Gallery</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/characters">Characters</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ページごとの中身 */}
      <main className="container mt-4">
        <Outlet />
      </main>
    </div>
  );
}
