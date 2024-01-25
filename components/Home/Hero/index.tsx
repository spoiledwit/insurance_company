"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import img from "@/assets/animation1.gif";

import Popup from "./Popup";

const Hero = () => {
  return (
    <div className="w-full flex-col md:flex-row flex items-center justify-center min-h-[70vh] bg-[#fdfbfd] px-8 md:px-16">
      <div className="md:w-1/2 lg:w-2/5 h-[50vh] bg-white flex items-center justify-center">
        <img src={img.src} alt="" />
      </div>
      <div className="md:w-1/2 lg:w-3/5 lg:px-20">
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
        <Popup />
      </div>
    </div>
  );
};

export default Hero;
