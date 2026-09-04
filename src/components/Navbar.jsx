import { NavLink } from "react-router-dom";

const links = [
  {path: "/arc", label: "Arc" },
  { path: "/campus-overview", label: "Campus" },
  { path: "/court-club", label: "Court" },
  { path: "/douthit", label: "Douthit" },
  { path: "/experiences", label: "Experiences" },
  { path: "/history-of-clemson", label: "History" },
  { path: "/schedule", label: "Schedule" },
  { path: "/team-highlights", label: "Team" },
  { path: "/watt", label: "Watt" },
];

function Navbar() {
  return (
    <nav className="navbar">
      {links.map((link, index) => (
        <NavLink
          key={index}
          to={link.path}
          className="nav-item"
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
}

export default Navbar;