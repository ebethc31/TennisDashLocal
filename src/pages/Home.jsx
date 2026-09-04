import "../home.css";
import scheduleImg from "../assets/homeImgs/upcomingGames/upcomingGames.jpg";
import mainImg from "../assets/homeImgs/main/mainImg.jpg"; 

export default function Home() {
  return (
    <div className="home-page">
      <div className="main-content">
        <img src={mainImg} alt="Main" />
      </div>

      <div className="right-panel">
        <div className="right-panel-header">
          Upcoming Home Games
        </div>

        <div className="right-panel-content">
          <img src={scheduleImg} alt="Schedule" />
        </div>
      </div>
    </div>
  );
}