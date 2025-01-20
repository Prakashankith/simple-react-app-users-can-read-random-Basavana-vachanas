import React, { useState } from "react";
import vachanas from "../data/vachanas.js";
import VachanaCard from "../components/VachanaCard";
import { useSwipeable } from "react-swipeable";

const Home = ({ favorites, setFavorites }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    const nextIndex = Math.floor(Math.random() * vachanas.length);
    setCurrentIndex(nextIndex);
  };

  const handleFavorite = () => {
    if (!favorites.includes(vachanas[currentIndex])) {
      setFavorites([...favorites, vachanas[currentIndex]]);
    }
  };
  const handlers = useSwipeable({
    onSwipedUp: handleNext,
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
    trackMouse: true,
  });

  return (
    <div {...handlers} className="home">
      <VachanaCard
        vachana={vachanas[currentIndex]}
        onNext={handleNext}
        onFavorite={handleFavorite}
      />
    </div>
  );
};

export default Home;
