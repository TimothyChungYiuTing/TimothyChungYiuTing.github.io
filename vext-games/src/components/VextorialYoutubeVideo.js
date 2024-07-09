import React from "react";
import VextorialVideo from "../videos/vextorial.mp4"

const VextorialYoutubeVideo = () => {
  return (
    <section className="pt-16 p-8 bg-black">
      
      <div className="mx-auto max-w-screen-md">
      <video className="w-full h-full rounded-xl" controls muted autoplay>
        <source src={VextorialVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        <h2 class="my-4 font-black text-4xl leading-snug text-indigo-400 mb-4">
          Introducing Vextorial
        </h2>

        <p className="font-normal !text-white text-xl">
          Experience the inter-dimensional exploration inside this neon themed
          game!
        </p>
      </div>
    </section>
    // </div>
  );
};

export default VextorialYoutubeVideo;
