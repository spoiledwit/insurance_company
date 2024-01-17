import React from "react";
import person4 from "@/assets/person4.gif";

const Five = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center px-8 md:px-16 py-10 border">
      <div className="md:w-1/3 bg-black h-[50vh]">
        <img src={person4.src} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="md:w-1/3 px-5">
        <h1 className="text-3xl mb-3 font-semibold">
          We work with the best car insurance companies in UAE
        </h1>
        <p>
          We work with some of the biggest car insurance companies in the UAE
          such as; Sukoon, Qatar Insurance Company, Dubai Insurance Company, Abu
          Dhabi National Takaful Company, Al Fujairah Insurance Company and
          Salama amongst others.
        </p>
      </div>
    </div>
  );
};

export default Five;
