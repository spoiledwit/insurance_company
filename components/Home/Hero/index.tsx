"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import img from "@/assets/animation1.gif";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="w-full flex-col md:flex-row flex items-center justify-center min-h-[70vh] bg-[#fdfbfd] px-8 md:px-16">
      <div className="md:w-1/2 lg:w-2/5 h-[50vh] bg-white flex items-center justify-center">
        <img src={img.src} alt="" />
      </div>
      <div className="md:w-1/2 lg:w-3/5 lg:px-20">
        <button className="font-bold text-sm flex items-center my-5 py-2 px-3 bg-red-700 text-white rounded-lg shadow-lg hover:bg-red-800">
          <FaWhatsapp className="text-xl mr-2" />
          <a href="https://wa.me/971507114383">WhatsApp</a>
        </button>
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
        <Link
          href="#contact"
          className="mt-10 px-10 py-3 bg-red-700 text-white rounded-lg shadow-lg hover:bg-red-800"
        >
          Get Your Quote Now
        </Link>
      </div>
    </div>
  );
};

export default Hero;
