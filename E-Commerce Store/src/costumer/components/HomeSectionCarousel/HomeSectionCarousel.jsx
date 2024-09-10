import { useState } from "react";
import propTypes from "prop-types";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
function HomeSectionCarousel({ data, sectionName }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const slidePrev = () => {
    setActiveIndex(activeIndex - 1);
  };

  const slideNext = () => {
    setActiveIndex(activeIndex + 1);
  };

  const syncActiveIndex = ({ item }) => {
    setActiveIndex(item);
  };

  const items = data.map((item) => <HomeSectionCard item={item} key={item} />);
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };
  return (
    <div className="border">
      <h2 className="text-2xl font-extrabold text-gray-900 py-5 px-2">
        {sectionName}
      </h2>
      <div className="relative p-5">
        <AliceCarousel
          key={activeIndex}
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          activeIndex={activeIndex}
          onSlideChanged={syncActiveIndex}
        />
        {activeIndex !== items.length - 5 && (
          <Button
            onClick={slideNext}
            className="z-50"
            variant="contained"
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
              bgcolor: "white",
            }}
            aria-label="next"
          >
            <ArrowForwardIosIcon sx={{ rotate: "-90deg", color: "black" }} />
          </Button>
        )}

        {activeIndex !== 0 && (
          <Button
            onClick={slidePrev}
            className="z-50"
            variant="contained"
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%) rotate(90deg)",
              bgcolor: "white",
            }}
            aria-label="prev"
          >
            <ArrowForwardIosIcon sx={{ rotate: "90deg", color: "black" }} />
          </Button>
        )}
      </div>
    </div>
  );
}
HomeSectionCarousel.propTypes = {
  data: propTypes.array,
  sectionName: propTypes.string,
};
export default HomeSectionCarousel;
