import React from "react";
import caranim3 from "@/assets/caranim3.gif"

const Four = () => {
  return (
    <div className="flex justify-center items-center px-16 my-20 border-t">
      <div className="w-1/3">
        <h1 className="text-3xl font-semibold mb-2">Personal Accident Coverage</h1>
        <p>
        Provides additional financial protection against personal injuries for the driver and passengers in the event of an accident.
        </p>
      </div>
      <div className="w-1/3 bg-black h-[50vh]">
        <img src={caranim3.src} alt="caranim3" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Four;
