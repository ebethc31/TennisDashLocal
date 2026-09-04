import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
import Home from "./pages/Home";
import CampusOverview from "./pages/CampusOverview";
import CourtClub from "./pages/CourtClub";
import Douthit from "./pages/Douthit";
import Experiences from "./pages/Experiences";
import HistoryOfClemson from "./pages/HistoryOfClemson";
import Schedule from "./pages/Schedule";
import TeamHighlights from "./pages/TeamHighlights";
import Watt from "./pages/Watt";
import Arc from "./pages/Arc";
/*
export default function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/campus-overview" element={<CampusOverview />} />
          <Route path="/court-club" element={<CourtClub />} />
          <Route path="/douthit" element={<Douthit />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/history-of-clemson" element={<HistoryOfClemson />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/team-highlights" element={<TeamHighlights />} />
          <Route path="/watt" element={<Watt />} />
        </Routes>
      </div>
    </div>
  );
}
  */

export default function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="app">
      {!isHome && <TopBar />}

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/arc" element={<Arc />} />
          <Route path="/campus-overview" element={<CampusOverview />} />
          <Route path="/court-club" element={<CourtClub />} />
          <Route path="/douthit" element={<Douthit />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/history-of-clemson" element={<HistoryOfClemson />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/team-highlights" element={<TeamHighlights />} />
          <Route path="/watt" element={<Watt />} />
        </Routes>
      </div>

      <Navbar />
    </div>
  );
}