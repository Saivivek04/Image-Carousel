import React, { useState } from "react";
import "./App.css";

const images = [
  "https://unsplash.com/photos/a-large-swimming-pool-with-a-slide-in-the-middle-of-it-5ajzXUSb-q4",
  "https://unsplash.com/photos/a-view-of-a-city-at-night-from-across-the-water-5TzLFIspte8",
  "https://unsplash.com/photos/a-blurry-photo-of-a-black-background-VN4S7wmxeFA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      <div className="carousel-inner">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      </div>
      <button className="carousel-control prev" onClick={goToPrevious}>
        ❮
      </button>
      <button className="carousel-control next" onClick={goToNext}>
        ❯
      </button>
    </div>
  );
}

export default App;