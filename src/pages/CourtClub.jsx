import "../courtClub.css";
import qrCode from "../assets/courtClubImgs/donorQR.jpg";
import infoPic from "../assets/courtClubImgs/clubInfo.jpg";

export default function CourtClub() {
  return (
    <div className="page">
      <h1>Court Club</h1>
       <div className="split-page">

      {/* Left Half */}
      <div className="half">
        <img
          src={infoPic}
          alt="Large"
          className="large-image"
        />
      </div>

      {/* Right Half */}
      <div className="half">
        <img
          src={qrCode}
          alt="Small"
          className="small-image"
        />
      </div>

      </div>
    </div>
  );
}