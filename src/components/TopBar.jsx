import { useNavigate, useLocation } from "react-router-dom";

function TopBar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Map routes to readable titles
  const titles = {
    "/campus-overview": "Campus Overview",
    "/arc": "Arc",
    "/court-club": "Court Club",
    "/douthit": "Douthit",
    "/experiences": "Experiences",
    "/history-of-clemson": "History of Clemson",
    "/schedule": "Schedule",
    "/team-highlights": "Team Highlights",
    "/watt": "Watt",
  };

  const title = titles[location.pathname] || "";

  return (
    <div className="topbar">
      <button className="home-button" onClick={() => navigate("/")}>
        ⌂
      </button>

      <div className="topbar-title">{title}</div>
    </div>
  );
}

export default TopBar;