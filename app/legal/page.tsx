import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="my-10 flex justify-center flex-col md:flex-row items-center px-8 md:px-16 gap-10">
      <Link
        href="/privacy"
        className="border p-10 rounded-2xl shadow-xl w-full md:w-1/2 space-y-5"
      >
        <h1 className="font-bold text-2xl text-red-700">Privacy Policy</h1>
        <p className="text-justify">
          nterested in understanding how we handle your personal information? We
          encourage you to read our comprehensive Privacy Policy. It details how
          we collect, use, and protect your data, ensuring your peace of mind.
          To learn more about your privacy rights and our data practices, please
          visit the Privacy Policy section on our website.
        </p>
      </Link>
      <Link
        href="/terms"
        className="border p-10 rounded-2xl shadow-xl w-full md:w-1/2 space-y-5"
      >
        <h1 className="font-bold text-2xl text-red-700">
          Terms and Conditions
        </h1>
        <p className="text-justify">
          Before using our services, it's important to be familiar with our
          Terms and Conditions. This document governs your use of Veeels.com and
          outlines your rights and responsibilities, as well as ours. To ensure
          a smooth and transparent relationship, please review our Terms and
          Conditions available on our website.
        </p>
      </Link>
    </div>
  );
};

export default page;
