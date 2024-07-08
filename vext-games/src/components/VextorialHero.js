import React, { useRef } from "react";
import NavigationBar from "./NavigationBar";
import VextorialTitle from "../images/VextorialTitle.png";
import WithoutLogo from "../images/Without_Logo.png";

const VextorialHero = () => {
    const targetRef = useRef(null);

    const scrollToComponent = () => {
      if (targetRef.current) {
        targetRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

  return (
    <div class="custom-gradient-bg h-screen flex flex-col animate-gradient">
      <NavigationBar />
      <div id="stars" className="-z-5"></div>
      <div id="stars2" className="-z-5"></div>
      <div id="stars3" className="-z-5"></div>
      <div class="custom-image-bg relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div class="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-32 lg:max-w-screen-xl">
          <div class="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <div class="max-w-xl mb-6">
              <div>
                <img
                  class="custom-size animate-shadowPulse"
                  src={VextorialTitle}
                  alt="Vext Games"
                />
              </div>
              <h2 class="vextorial-desc-text-outline max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                The puzzle game that will keep you playing
                <span class="inline-block text-[#50d5fa]">over and over</span>
              </h2>
            </div>
            <div class="flex flex-col items-center md:flex-row">
              
            </div>
          </div>
        </div>
        {/* <div class="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
          <img
            class="object-cover w-full h-56 rounded-tl-lg rounded-bl-lg shadow-lg lg:shadow sm:h-96 lg:h-4/5"
            src={WithoutLogo}
            alt=""
          />
        </div> */}
      </div>
    </div>
  );
};

export default VextorialHero;
