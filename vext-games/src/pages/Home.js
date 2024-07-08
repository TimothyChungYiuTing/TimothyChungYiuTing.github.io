import React from "react";
import MeetTheTeam from "../components/MeetTheTeam";
import ProductHero from "../components/ProductHero";
import Content from "../components/Content";
import Values from "../components/Values";

const Home = () => {
  return (
    <div className="smooth-scroll bg-black">
      <ProductHero />
      <Content />
      <Values />
      <MeetTheTeam />
    </div>
  );
};

export default Home;
