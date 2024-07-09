import React, { useRef, useState, useEffect } from "react";
import ProductHeroBG from "../images/ProductHeroBackground.png";

export default function Example() {
  const elementRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    const handleScroll = () => {
      if (!animated) {
        const elementTop = element.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        // Check if element is in viewport
        if (elementTop < viewportHeight) {
          element.classList.add("animate-text-slide-left");
          setAnimated(true); // Mark animation as completed
        }
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animated]);

  return (
    <div className="relative isolate overflow-hidden bg-black px-6 py-24 sm:py-10 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-650 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-700">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div
        ref={elementRef}
        className="p-8 mx-auto flex flex-col items-center justify-center max-w-2xl lg:max-w-none"
      >
        <div className="lg:w-full lg:max-w-7xl lg:flex lg:flex-col lg:items-center lg:px-8">
        <div className="h-22"></div>
          <div className="lg:max-w-lg text-center">
            <p className="text-base font-semibold leading-7 text-indigo-200">
              Imagination innovated
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-indigo-400 sm:text-4xl">
              A new gaming world to explore
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-200"></p>
          </div>
        </div>
        <div className="lg:w-full lg:max-w-7xl lg:flex lg:flex-col lg:items-center lg:px-8">
          <div className="max-w-xl text-base leading-7 text-gray-200 lg:max-w-lg text-center">
            <p className="text-lg">
              United by our shared passion for game development, we bring
              together a wide range of skills and experiences. Each of us is
              dedicated to creating exciting gameplay experiences that captivate
              and engage players. Our unique backgrounds and expertise allow us
              to approach game design from various perspectives, ensuring
              innovation and creativity in every project.
            </p>
            <div className="h-16"></div>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-indigo-400">
              Our Journey
            </h2>
            <p className="mt-6 text-lg">
              Tranzfuser has offered us the opportunity to refine our project,
              Vextorial, and gain the support and recognition needed to bring
              our vision to life. We are eager to showcase our talents and take
              our game development journey to new heights. We hope you'll join
              us on our journey in making something that will keep you talking
              about us for years to come!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
