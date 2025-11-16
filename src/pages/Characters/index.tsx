import { Link } from "react-router-dom";

export default function Characters() {
  return (
    <div>
      <h1>キャラクター一覧</h1>
      <Link to="/characters/group1">一陣</Link>
      <Link to="/characters/group2">二陣</Link>
      <Link to="/characters/group3">三陣</Link>
      <Link to="/characters/group4">四陣</Link>
      <Link to="/characters/group5">五陣</Link>
    </div>
  );
}
