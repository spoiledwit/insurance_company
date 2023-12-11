import React from "react";
import carAnim from "@/assets/caranim1.gif"

const Three = () => {
  return (
    <div className="flex flex-col items-center px-16 bg-[#fdfbfd] py-10">
      <h1 className="font-semibold my-10 text-3xl ">Types of car insurance</h1>
      <div className="flex w-full justify-center">
        <div className="w-1/3 h-[50vh]">
          <img src={carAnim.src} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="w-1/3 px-10">
  <h1 className="font-bold text-2xl my-3">
    Full Coverage Car Insurance
  </h1>
  <p className="mb-10 text-lg">
    Offers extensive protection, covering both third-party liabilities and damages to your own vehicle.
  </p>
  <h1 className="font-bold text-2xl my-3">
    Third-Party Liability Insurance
  </h1>
  <p className="text-lg">
    This policy covers damages or injuries inflicted on third parties involving your insured vehicle.
  </p>
</div>

      </div>
    </div>
  );
};

export default Three;
