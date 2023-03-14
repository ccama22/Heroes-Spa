import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui";
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../pages";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />

          <Route path="search" element={<SearchPage />} />
          {/* ustedes obtienen los segmentos del url que ustedes especificaron */}
          <Route path="hero/:id" element={<HeroPage />} />
          {/* Search, Hero by id */}
          <Route path="/*" element={<Navigate to="/marvel" replace />} />
        </Routes>
      </div>
    </>
  );
};
