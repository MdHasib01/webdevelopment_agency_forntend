import React from "react";
import BuyerBanner from "../BuyerBanner/BuyerBanner";
import DisplayProjects from "../DisplayProjects/DisplayProjects";
import GigSection from "../GigSection/GigSection";
import TopBanner from "../TopBanner/TopBanner";

const Home = () => {
  return (
    <div>
      <TopBanner />
      <GigSection />
      <BuyerBanner />
      <DisplayProjects />
    </div>
  );
};

export default Home;
