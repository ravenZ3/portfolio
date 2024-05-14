"use client"
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import profile from '@/public/profile2.jpg'
import '/styles/fonts.css' 


const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 sm:col-span-7 place-self-center">
        <h1 className="text-white font-extrabold text-5xl mb-6 lg:text-7xl" >
  <span className=" mb-3 block bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 from-10% via-purple-500 via-50% to-pink-500">
    Hello, I'm {""}
  </span>
  <TypeAnimation
  className="font-gitterNeormis"
  sequence={[
    // Same substring at the start will only be typed once, initially
    "Ramjan",
    1000,
    'Web Developer',
    1000,
    'Guitar Player',
    1000,
    'Blogger',
    1000,
  ]}
  speed={2}
  repeat={Infinity}
/>
</h1>


          <p className="text-[#c3cacf] text-lg sm:text-left  lg:text-xl mb-6 mr-6">
            I love bringing my abstractions to reality, turn them into something I can give to the world. I believe that I have so many ideas inside of me that are just waiting for me to work them into reality.
            <br/>Firm believer in the idea that if we act from a place of expansion and inspiration and not from a place of fear and scaredness <i>magical things </i>can happen and will happen.
          </p>
          <div>
            <button className="text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-6 rounded-full border-black px-6 py-3 bg-white mr-4 hover:bg-slate-200">
              Hire me
            </button>
            <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full px-1 py-3 bg-transparent mr-6 ">
              <span className="text-white rounded-full px-3 py-3 bg-[#121212] hover:bg-transparent  ">Download CV</span>
            </button>
          </div>
        </div>
        <div className="col-span-5 sm:col-span-5 lg:col-span-5 place-self-center relative mt-4 lg:mt-0">
          <div className="relative rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] mt-5">
            <Image
              src={profile}
              alt="hero-image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 scale-125 border border-[#121212]-100 rounded-full"
              width={300}
              height={300}
              border={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
