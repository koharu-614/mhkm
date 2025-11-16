import { Link } from "react-router-dom";

export default function Characters() {
  return (
    <div>
      <h1>キャラクター一覧</h1>
      <Link to="/characters/group1/group1">一陣</Link><br />
      <Link to="/characters/group2/group2">二陣</Link><br />
      <Link to="/characters/group3/group3">三陣</Link><br />
      <Link to="/characters/group4/group4">四陣</Link><br />
      <Link to="/characters/group7/group7">七陣</Link>
    </div>
  );
}
