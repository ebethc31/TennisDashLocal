import "../douthit.css";

import mainImg from "../assets/douthitImgs/community-space.jpg";
import cubsImg from "../assets/douthitImgs/cubs-space.jpg";
import communityImg from "../assets/douthitImgs/community-space.jpg";

export default function Home() {
  return (
    <div className="page">
      <div className="content">
        <div className="left-section">
          <img
            src={mainImg}
            alt="Douthit"
            className="main-image"
          />

          <p className="description">
            Located a short distance from the Wilbur O. and Ann Powers College 
            of Business building, Douthit E offers an all-inclusive living experience
            for students.
          </p>
        </div>

        <div className="right-section">
          <div className="small-card">
            <h2>CUBS Spaces</h2>

            <img
              src={cubsImg}
              alt="CUBS Spaces"
              className="side-image"
            />
          </div>

          <div className="small-card">
            <h2>Community Spaces</h2>

            <img
              src={communityImg}
              alt="Community Spaces"
              className="side-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}