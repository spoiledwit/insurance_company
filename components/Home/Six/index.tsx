import React from "react";
import person4 from "@/assets/person4.gif"

const Six = () => {
  return (
    <div className="px-16 flex flex-col items-center my-20">
      <div className="h-[30vh] w-1/4">
        <img src={person4.src} alt="" className="h-full w-full object-cover" />
      </div>
      <h1 className="text-2xl my-3">Insurance. But good.</h1>
      <button className="px-10 py-3 bg-black text-white my-3">Get Quote</button>
      <p className="font-extralight text-sm text-gray-500">Have Quesitions?</p>
    </div>
  );
};

export default Six;
