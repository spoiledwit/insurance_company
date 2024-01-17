"use client";

import React from "react";
import { useState } from "react";

import carStatic from "@/assets/carstatic.png";
import carMoving from "@/assets/carmoving.gif";
import quoteMoving from "@/assets/quotemoving.gif";
import quoteStatic from "@/assets/quoteStatic.png";
import personstatic from "@/assets/personstatic.png";
import personmoving from "@/assets/personmoving.gif";

const Two = () => {
  const [car, setCar] = useState(carMoving);
  const [quote, setQuote] = useState(quoteMoving);
  const [person, setPerson] = useState(personmoving);

  return (
    <div className="my-10 flex flex-col items-center bg-white px-8 md:px-16">
      <h1 className="text-center text-[2rem] font-semibold my-10">
        Car Insurance as easy as 1-2-3
      </h1>
      <div className="gap-10 md:gap-0 w-full flex flex-col md:flex-row justify-around">
        <div className="md:w-1/4 text-center">
          <div
            className="w-full h-[20vh] "
            onMouseEnter={() => setCar(carMoving)}
            onMouseLeave={() => setCar(carStatic)}
          >
            <img
              src={car.src}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="font-bold text-lg mt-5 mb-2">
            Emirates ID & Vehicle Registration
          </h1>
          <p>
            Enter your Emirates ID and Vehicle Registration for a quick
            insurance estimate. Our AI system finds competitive rates
            efficiently.
          </p>
        </div>
        <div className="md:w-1/4 text-center">
          <div
            className="w-full h-[20vh]"
            onMouseEnter={() => setQuote(quoteMoving)}
            onMouseLeave={() => setQuote(quoteStatic)}
          >
            <img
              src={quote.src}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="font-bold text-lg my-3">Insurance Comparison</h1>
          <p>
            Compare car insurance from leading UAE providers transparently. No
            hidden costs, prioritizing your privacy and data security.
          </p>
        </div>
        <div className="md:w-1/4 text-center">
          <div
            className="w-full h-[20vh]"
            onMouseEnter={() => setPerson(personmoving)}
            onMouseLeave={() => setPerson(personstatic)}
          >
            <img
              src={person.src}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="font-bold my-3 text-lg">Instant Insurance 24/7</h1>
          <p>
            Choose and buy your policy in a click, instantly. Get your auto
            insurance any time, without delays or approvals.
          </p>
        </div>
      </div>
      <button className="my-10 px-20 py-3 bg-red-700 text-white rounded-xl">
        Get Started
      </button>
    </div>
  );
};

export default Two;
