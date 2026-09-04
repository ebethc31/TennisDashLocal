import "../campusOverview.css"
import campusMap from "../assets/campusOverviewImgs/campus.jpg"

export default function CampusOverview() {
  return (
    <div className="page">
      <h1>Campus Overview</h1>
      <div className="image-page">
        <img src={campusMap} alt="Full screen" className="image" />
      </div>
    </div>
  );
}