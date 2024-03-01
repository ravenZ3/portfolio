"use client"
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 sm:col-span-7 place-self-center">
        <h1 className="text-white font-extrabold text-5xl mb-6 lg:text-7xl" >
        <span className=" mb-3 block bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 from-10% via-purple-500 via-50% to-pink-500">
  Hello, I`&apos`m {""} 
</span>

  <TypeAnimation
  sequence={[
    // Same substring at the start will only be typed once, initially
    'Ramjan',
    1000,
    'Web Developer',
    1000,
    'Systems Tester',
    1000,
    'UI/UX Designer',
    1000,
  ]}
  speed={25}
  repeat={Infinity}
/>
</h1>


          <p className="text-[#ADB7BE] text-lg sm:text-left  lg:text-xl mb-6 mr-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit
            amet nunc eget ex facilisis cursus. Vivamus vel varius ipsum. Nulla
            facilisi. Nulla facilisi.
          </p>
          <div>
            <button className="text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-6 rounded-full border-black px-6 py-3 bg-white mr-4 hover:bg-slate-200">
              Hire me
            </button>
            <button className="text-white rounded-full px-6 py-3 bg-transparent mr-4 border-white border-2 hover:bg-slate-400">
              Download CV
            </button>
          </div>
        </div>
        <div className="col-span-5 sm:col-span-5 lg:col-span-5 place-self-center relative mt-4 lg:mt-0">
          <div className="relative rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] mt-5">
            <Image
              src="/hero-image.png"
              alt="hero-image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>


<p
  class="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent">
  Gradient text
</p>
    </section>
  );
};

export default HeroSection;
