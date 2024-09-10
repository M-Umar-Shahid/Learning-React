import { men_kurta } from "../../../Data/men_kurta";
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";
import Footer from "../../components/Footer/Footer";
function Homepage() {
  return (
    <>
      <div>
        <HomeCarousel />
        <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
          <HomeSectionCarousel data={men_kurta} sectionName={"Men's Kurta"} />
          <HomeSectionCarousel data={men_kurta} sectionName={"Men's Shoes"} />
          <HomeSectionCarousel data={men_kurta} sectionName={"Men's Pants"} />
          <HomeSectionCarousel data={men_kurta} sectionName={"Women's Kurta"} />
          <HomeSectionCarousel data={men_kurta} sectionName={"Women's Saree"} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Homepage;
