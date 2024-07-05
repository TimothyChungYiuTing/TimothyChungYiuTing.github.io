import React, { useEffect, useRef, useState } from "react";
import MainChar from "../images/main_char.png";

const VextorialContent = () => {
  const [animatedElements, setAnimatedElements] = useState(new Set());

  const elementsRef = useRef([]);
  elementsRef.current = [];

  const addToRefs = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      elementsRef.current.forEach((element) => {
        if (!animatedElements.has(element)) {
          const elementTop = element.getBoundingClientRect().top;
          const viewportHeight = window.innerHeight;

          // Check if element is in viewport
          if (elementTop < viewportHeight) {
            element.classList.add("animate-text-slide-bottom");
            setAnimatedElements((prev) => new Set(prev.add(element))); // Mark animation as completed
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animatedElements]);

  return (
    <section class="bg-black dark:bg-gray-900">
      {/* <div className="mx-20 my-20 border-8 border-solid border-indigo-600 rounded-md custom-neon-border "> */}
        <div
          ref={addToRefs}
          class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6"
        >
          <div class="font-light text-white sm:text-xl dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-indigo-400 dark:text-white">
              Add to your Steam Wishlist
            </h2>
            <p class="mb-4">
              Add Vextorial to your Steam Wishlist to receive notifications
              about the game's release!
            </p>
            <h3 class="mb-4 text-xl tracking-tight font-extrabold text-yellow dark:text-white">
              Click on the image to the right for Steam!
            </h3>
          </div>
          <div class="grid grid-cols-2 gap-4 mt-8">
            <a
              href="https://store.steampowered.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                class="mt-4 w-full lg:mt-10 rounded-lg"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
                alt="office content 2"
              />
            </a>
          </div>
        </div>
      {/* </div> */}

      {/* <div className="mx-20 my-20 border-8 border-solid border-indigo-600 rounded-md custom-neon-border"> */}
        <div
          ref={addToRefs}
          class="animate-text-slide-bottom gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6"
        >
          <div class="font-light text-white sm:text-xl dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-indigo-400 dark:text-white">
              Meet our Main Character
            </h2>
            <p class="mb-4">
              Join Pilo on a journey to discover the unknowns in a universe that
              has been flipped inside out. After losing all memories of the
              past, our main character looks for answers in an unfamiliar
              setting. Encounters with strangers, friend and foe, who will
              succumb and who will succeed against the daunting challenges
              awaiting in this new world full of mystery and wonder...
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4 mt-8">
            <img
              class="w-full rounded-lg animate-shadowPulse"
              src={MainChar}
              alt="Main Character"
            />
          </div>
        </div>
      {/* </div> */}

      {/* <div className="mx-20 my-20 border-8 border-solid border-indigo-600 rounded-md custom-neon-border"> */}
        <div
          ref={addToRefs}
          class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6"
        >
          <div class="grid grid-cols-2 gap-4 mt-8">
            <img
              class="w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
            />
            <img
              class="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
            />
          </div>
          <div class="font-light text-white sm:text-xl dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-indigo-400 dark:text-white">
              Pilo's Story
            </h2>
            <p class="mb-4">
              With memories missing and the mind of an avid explorer, Pilo
              explores new areas in the world hoping for closure on unanwered
              questions. Family members gone astray and an uncertain future
              awaiting to be protected, can Pilo step up to the task.
            </p>
          </div>
        </div>
      {/* </div> */}
    </section>
  );
};

export default VextorialContent;
