import React from "react";

interface Props {
  name: string;
  value: string;
}

const Card = ({ name, value }: Props) => {
  return (
    <div className="w-[320px] overflow-hidden shadow-lg border rounded-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl bg-white m-3">
      <div className="p-4 bg-gradient-to-r from-red-500 to-red-700">
        <h1 className="font-semibold text-xl text-white drop-shadow-md">
          {name}:
        </h1>
      </div>
      <div className="p-4 bg-white">
        <p className="text-gray-800 text-2xl font-bold leading-relaxed">
          {value}
        </p>
      </div>
    </div>
  );
};

export default Card;
