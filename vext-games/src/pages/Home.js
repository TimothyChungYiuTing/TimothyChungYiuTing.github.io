import React, { useEffect } from "react";
import MeetTheTeam from "../components/MeetTheTeam";
import ProductHero from "../components/ProductHero";
import Content from "../components/Content";
import Values from "../components/Values";

const Home = () => {
  // useEffect(() => {
  //   const handleScroll = () => {
  //     document.body.style.setProperty(
  //       "--scroll",
  //       window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
  //     );
  //   };

  //   window.addEventListener("scroll", handleScroll, false);

  //   // Clean up the event listener on component unmount
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll, false);
  //   };
  // }, []);

  return (
    <div className="smooth-scroll bg-black">
      {/* <div className="flex justify-center space-x-10 floating-button">
        <div className="cube-wrap">
          <div className="cube">
            <div className="side top"></div>
            <div className="side bottom"></div>
            <div className="side front"></div>
            <div className="side back"></div>
            <div className="side left"></div>
            <div className="side right"></div>
          </div>
        </div>
        <div className="cube-wrap">
          <div className="cube-opp">
            <div className="side top"></div>
            <div className="side bottom"></div>
            <div className="side front"></div>
            <div className="side back"></div>
            <div className="side left"></div>
            <div className="side right"></div>
          </div>
        </div>
      </div> */}
      <ProductHero />
      <Content />
      <Values />
      <MeetTheTeam />
    </div>
  );
};

export default Home;
