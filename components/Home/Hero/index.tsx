"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";
import img from "@/assets/animation1.gif";

const Hero = () => {
  return (
    <div className="w-full flex items-center justify-center min-h-[70vh] bg-[#fdfbfd] px-16">
      <div className="w-2/5 h-[50vh] bg-white flex items-center justify-center">
      <img src={img.src} alt="" />
      </div>
      <div className="w-3/5 px-20">
        <p className="text-lg font-semibold text-red-600">
          Comprehensive Car Insurance.
        </p>
        <h1 className="font-bold text-4xl text-black tracking-wider my-5">
          <span>Car Insurance for</span>
          <br />
          <span className="text-red-700">
            <TypeAnimation
              sequence={["UAE vehicles", 3000, "Non UAE vehicles", 3000]}
              speed={40}
              wrapper="span"
              repeat={Infinity}
            />
          </span>
        </h1>
        <p className="text-md text-black my-5">
          Whether you're driving at home or abroad, get the coverage you need.
          Compare and choose from the best car insurance options available.
        </p>
        <button className="mt-10 px-10 py-3 bg-red-700 text-white rounded-lg shadow-lg hover:bg-red-800">
          Get Your Quote Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
