import React from "react";
import VextorialHero from "../components/VextorialHero";
import VextorialContent from "../components/VextorialContent";
import VextorialYoutubeVideo from "../components/VextorialYoutubeVideo";
import VextorialFloatingButton from "../components/VextorialFloatingButton";

const Vextorial = () => {
  return (
    <div>
      <VextorialFloatingButton/>
      <VextorialHero />
      <VextorialYoutubeVideo/>
      <VextorialContent />
    </div>
  );
};

export default Vextorial;
