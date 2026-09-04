import "../watt.css";
import video from "../assets/arcImgs/download.mp4";

export default function Watt() {
  return (
    <div className="video-page">
      <div className="video-container">
        <video controls>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}