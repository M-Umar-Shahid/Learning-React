import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { HomeCarouselData } from "./HomeCarouselData";
function HomeCarousel() {
  const items = HomeCarouselData.map((item) => (
    <img
      role="presentaion"
      className="cursor-pointer"
      key={item.image}
      src={item.image}
      alt=""
    />
  ));
  return (
    <AliceCarousel
      mouseTracking
      items={items}
      controlsStrategy="alternate"
      disableButtonsControls
      autoPlay
      autoPlayInterval={2000}
      infinite
    />
  );
}

export default HomeCarousel;
