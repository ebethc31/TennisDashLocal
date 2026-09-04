/*
export default function TeamHighlights() {
  return (
    <div className="page">
      <h1>Team Highlights</h1>
      <p>Welcome to the Team Highlights page.</p>
    </div>
  );
}
*/import { useState } from "react";
import "../teamHighlights.css";

import img1 from "../assets/highlights/action1.jpg";
import img2 from "../assets/douthitImgs/community-space.jpg";
import img3 from "../assets/douthitImgs/cubs-space.jpg";

export default function TeamHighlights() {
  const images = [img1, img2, img3];
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="gallery-page">
      <div className="carousel">
        <button className="arrow" onClick={prevImage}>
          ‹
        </button>

        <div className="image-frame">
          <img
            src={images[index]}
            alt={`Gallery ${index + 1}`}
            className="carousel-image"
          />
        </div>

        <button className="arrow" onClick={nextImage}>
          ›
        </button>
      </div>
    </div>
  );
}