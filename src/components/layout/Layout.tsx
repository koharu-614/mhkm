import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      {/* ヘッダー */}
      <header>
        <nav>
          <ul>
            <li><Link to="/">Top</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/history">History</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
          </ul>
        </nav>
      </header>

      {/* ページごとの中身がここに入る */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}
