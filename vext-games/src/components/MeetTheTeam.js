import React from "react";
import Kevin from "../images/TeamMembers/kevin.jpg";
import Tunde from "../images/TeamMembers/Tunde.jpg";
import Timothy from "../images/TeamMembers/Timothy.jpg";
import Sammi from "../images/TeamMembers/Sammi.jpg";
import Kunish from "../images/TeamMembers/Kunish.jpg";
import Emily from "../images/TeamMembers/Emily.jpg";

const Team = () => {
  return (
      <section
        class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12"
      >
        <div class="text-center pb-12">
          <h2 class="text-base font-bold text-indigo-200">Our Team</h2>
          <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-indigo-400">
            Meet the Team
          </h1>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="hover:animate-shadowPulse w-full bg-[#02456b] rounded-lg p-12 flex flex-col justify-center items-center">
            <div class="mb-8">
              <img
                className="object-center object-cover rounded-full h-36 w-36 transform"
                src={Timothy}
                alt="Timothy"
              />
            </div>
            <div class="text-center">
              <p class="text-3xl text-indigo-400 font-bold mb-2">Timothy</p>
              <p class="text-xl text-indigo-200 font-normal">Team Leader</p>
            </div>
          </div>
          <div class="hover:animate-shadowPulse w-full bg-[#02456b] rounded-lg p-12 flex flex-col justify-center items-center">
            <div class="mb-8">
              <img
                className="object-center object-cover rounded-full h-36 w-36 transform"
                src={Emily}
                alt="Emily"
              />
            </div>
            <div class="text-center">
              <p class="text-3xl  text-indigo-400 font-bold mb-2">Emily</p>
              <p class="text-xl  text-indigo-200 font-normal">Game Designer</p>
            </div>
          </div>
          <div class="hover:animate-shadowPulse w-full bg-[#02456b] rounded-lg p-12 flex flex-col justify-center items-center">
            <div class="mb-8">
              <img
                className="object-center object-cover rounded-full h-36 w-36 transform"
                src={Sammi}
                alt="Sammi"
              />
            </div>
            <div class="text-center">
              <p class="text-3xl text-indigo-400 font-bold mb-2">Sammi</p>
              <p class="text-xl text-indigo-200 font-normal">
                Artist & Community Manager
              </p>
            </div>
          </div>
          <div class="hover:animate-shadowPulse w-full bg-[#02456b] rounded-lg p-12 flex flex-col justify-center items-center">
            <div class="mb-8">
              <img
                className="object-center object-cover rounded-full h-36 w-36 transform"
                src={Kunish}
                alt="Kunish"
              />
            </div>
            <div class="text-center">
              <p class="text-3xl text-indigo-400 font-bold mb-2">Kunish</p>
              <p class="text-xl text-indigo-200 font-normal">
                Software Engineer
              </p>
            </div>
          </div>
          <div class="hover:animate-shadowPulse w-full bg-[#02456b] rounded-lg p-12 flex flex-col justify-center items-center">
            <div class="mb-8">
              <img
                className="object-center object-cover rounded-full h-36 w-36 transform"
                src={Tunde}
                alt="Tunde"
              />
            </div>
            <div class="text-center">
              <p class="text-3xl text-indigo-400 font-bold mb-2">Tunde</p>
              <p class="text-xl text-indigo-200 font-normal">
                Graphic Designer
              </p>
            </div>
          </div>
          <div class="hover:animate-shadowPulse w-full bg-[#02456b] rounded-lg p-12 flex flex-col justify-center items-center">
            <div class="mb-8">
              <img
                className="object-center object-cover rounded-full h-36 w-36 transform"
                src={Kevin}
                alt="Kevin"
              />
            </div>
            <div class="text-center">
              <p class="text-3xl text-indigo-400 font-bold mb-2">Kevin</p>
              <p class="text-xl text-indigo-200 font-normal">Level Designer</p>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Team;
