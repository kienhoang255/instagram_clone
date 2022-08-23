import { useState } from "react";
import {ChevronLeftIcon, ChevronRightIcon} from "@chakra-ui/icons";
import { GoPrimitiveDot } from 'react-icons/go';

const slideStyles = {
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "30px",
  color: "#F5F5F5",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "30px",
  color: "#F5F5F5",
  zIndex: 1,
  cursor: "pointer",
  borderRadius: "50%"
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle = {
  margin: "6px 0px",
  cursor: "pointer",
  fontSize: "12px",
  color: "#B0B0B0"
};

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div style={sliderStyles}>
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
          {/* ❰ */}
          <ChevronLeftIcon color='#A0A0A0' backgroundColor="#FFFFFF" opacity={0.6} filter="initial" borderRadius='50%' border='1px solid #E0E0E0' boxShadow="0px 0px 2.5px 2.5px #E8E8E8"></ChevronLeftIcon>        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          {/* ❱ */}
          <ChevronRightIcon color='#A0A0A0' backgroundColor="#FFFFFF" opacity={0.6} filter="initial" borderRadius='50%' border='1.5px solid #E0E0E0' boxShadow="0px 0px 2.5px 2.5px #E8E8E8"></ChevronRightIcon>
        </div>
      </div>
      <div style={slideStylesWidthBackground}></div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            <GoPrimitiveDot/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;