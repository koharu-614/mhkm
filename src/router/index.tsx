import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home/Home";
import News from "../pages/News/News";
import History from "../pages/History";
import Gallery from "../pages/Gallery";
import Characters from "../pages/Characters";
import Group1 from "../pages/Characters/Group1/group1";
import Group2 from "../pages/Characters/Group2/group2";
import Group3 from "../pages/Characters/Group3/group3";
import Group4 from "../pages/Characters/Group4/group4";
import Group7 from "../pages/Characters/Group7/group7";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout を包むルート */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/history" element={<History />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/characters/group1/group1" element={<Group1 />} />
          <Route path="/characters/group2/group2" element={<Group2 />} />
          <Route path="/characters/group3/group3" element={<Group3 />} />
          <Route path="/characters/group4/group4" element={<Group4 />} />
          <Route path="/characters/group7/group7" element={<Group7 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
