import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home/Home";
import News from "../pages/News/News";
import History from "../pages/History";
import Gallery from "../pages/Gallery";
import Characters from "../pages/Characters";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
