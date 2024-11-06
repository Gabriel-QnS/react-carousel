import React, { useState, useEffect } from 'react';

function CarouselControls({ currentIndex, setCurrentIndex, pics }) {
  const [isPlaying, setIsPlaying] = useState(true);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pics.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + pics.length) % pics.length
    );
  };

  const handleStop = () => {
    setIsPlaying(false);
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        handleNext();
      }, 3000);
    }

    return () => clearInterval(interval);
  }, [isPlaying, currentIndex, pics.length]);

  return (
    <div className="carousel-controls p-3">
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
      {isPlaying ? (
        <button onClick={handleStop}>Stop</button>
      ) : (
        <button onClick={handlePlay}>Play</button>
      )}
    </div>
  );
}

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const pics = [];

  for (let i = 1; i <= 5; i++) {
    pics.push(`./assets/img${i}.jpg`);
  }

  return (
    <div className="carousel-container p-4">
      <div className="carousel m-auto border border-light border-5">
        <img src={pics[currentIndex]} alt="A string of numbers" />
        <CarouselControls
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        pics={pics}
      />
      </div>
    </div>
  );
}

export default Carousel;