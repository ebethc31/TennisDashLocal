import "../history.css"
import img1 from "../assets/historyImgs/img1.jpg";
import img2 from "../assets/historyImgs/img1.jpg";
import img3 from "../assets/historyImgs/img1.jpg";

export default function HistoryOfClemson() {
  return (
    <div className="page">
      <h1>Home Dashboard</h1>

      <div className="image-row">

        <img
          src={img1}
          alt="Team member 1"
          className="team-image"
        />

        <img
          src={img2}
          alt="Team member 2"
          className="team-image"
        />

        <img
          src={img3}
          alt="Team member 3"
          className="team-image"
        />

      </div>
    </div>
  );
}