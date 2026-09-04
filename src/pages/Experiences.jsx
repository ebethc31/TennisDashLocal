import "../Experiences.css";
import MenQR from "../assets/experienceImgs/instaQR.jpg";
import WomenQR from "../assets/experienceImgs/womensQR.png";

export default function Experiences() {
  return (
    <div className="overlay">
      <div className="card">
        <h2 className="card-text">
          Check out our Instagram
          to keep up with the team!
        </h2>

        <div className="qr-section">
          <div className="qr-item">
            <img
              src={MenQR}
              alt="Men's QR Code"
              className="card-image"
            />
            <p className="qr-subtitle">Men's Instagram</p>
          </div>

          <div className="qr-item">
            <img
              src={WomenQR}
              alt="Women's QR Code"
              className="card-image"
            />
            <p className="qr-subtitle">Women's Instagram</p>
          </div>
        </div>
      </div>
    </div>
  );
}