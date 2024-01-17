"use client";
import Link from "next/link";
import React from "react";
import { FiMessageCircle, FiPhone } from "react-icons/fi";

const page = () => {
  return (
    <div className="md:px-16 px-8 my-20 flex flex-col items-center">
      <div className="md:w-2/3 lg:w-1/2 flex flex-col items-center gap-3">
        <video src="/about.mp4" className="w-80" muted loop autoPlay />
        <h1 className="font-bold text-3xl">About Us</h1>
        <h2 className="text-center font-semibold text-red-700 text-3xl md:text-4xl">
          Your Peace, Our Promise
        </h2>
        <p className="md:text-lg font-light text-justify">
          Welcome to Veeels.com, your destination for hassle-free car insurance.
          A proud member of the Serv Corps Corporate Services family, we
          prioritize your peace of mind, providing simple, transparent, and
          quick insurance options. Reliable coverage is just a click away.
          Veeels.com – Insurance, Simplified, <br /> <br />
          Powered by Serv Corps Corporate Services.
        </p>
      </div>
      <div className="mt-20 md:w-2/3 lg:w-1/2 flex flex-col items-center gap-5">
        <video src="/about2.mp4" className="w-44" muted loop autoPlay />
        <p className="text-xl md:text-2xl">Insurance, But Good.</p>
        <button className="px-20 py-3 font-bold bg-red-700 text-white rounded-lg shadow-lg hover:bg-red-800">
          Get Quote
        </button>
        <p className="text-lg">Have Questions?</p>
        <div className="flex-col md:flex-row flex items-center gap-5">
          <button className="flex items-center gap-2 border-2 border-black rounded-lg p-2">
            <FiMessageCircle className="text-red-700 text-lg" /> Chat with us
          </button>
          <span className="text-xl">or</span>
          <span className="flex items-center gap-2">
            <FiPhone className="text-red-700 text-lg" />
            Call us at{" "}
            <a href="tel:+971555555555" className="underline text-red-700">
              +971 55 5555555
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default page;
