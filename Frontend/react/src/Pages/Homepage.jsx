import React from "react";
import HomeCarousel from "../customer/Components/Carousel/HomeCarousel";
import { homeCarouselData } from "../customer/Components/Carousel/HomeCaroselData";
import HomeProductSection from "../customer/Components/Home/HomeProductSection";
import { womensPage1 } from "../Data/Anklets/page1";
import { mens_chain } from "../Data/Mens_Chain/men_chain";

const Homepage = () => {
  return (
    <div className="">
      <HomeCarousel images={homeCarouselData} />

      <div className="space-y-10 py-20">
        <HomeProductSection data={womensPage1} section={"Women's Jewellery"} />
        <HomeProductSection data={mens_chain} section={"Men's Jewellery"} />
        {/* <HomeProductSection data={mensShoesPage1} section={"Men's Shoes"} /> */}
        {/* <HomeProductSection data={gounsPage1} section={"Women's Gouns"} /> */}
      </div>
    </div>
  );
};

export default Homepage;
