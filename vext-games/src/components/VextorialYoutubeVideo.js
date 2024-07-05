import React from "react";

const VextorialYoutubeVideo = () => {
  return (
    // <div className="mx-20 my-10 border-8 border-solid border-indigo-600 rounded-md custom-neon-border">

    <section className="p-8 bg-black">
      
      <div className="mx-auto max-w-screen-md">
        <iframe
          src="https://www.youtube.com/embed/Nzlsc9ssj_s?"
          className="mb-4 h-[28rem] w-full rounded-xl"
          allowfullscreen
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          title="Tutorial Video"
        ></iframe>
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
