"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoPerson } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { FaPassport } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { SiEmirates } from "react-icons/si";
import { FaCarAlt } from "react-icons/fa";
import { SiAdguard } from "react-icons/si";
import toast from "react-hot-toast";
import { set } from "mongoose";
interface Props {
  params: { slug: string };
}

const page = ({ params }: Props) => {
  const { slug } = params;
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`/api/quotes/${slug[0]}`);
      setData(response.data.result);
    };
    getData();
  }, []);

  const sendEmail = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`/api/quotes/${slug[0]}`);
      toast.success(response.data.message);
      setLoading(false);
    } catch (err: any) {
      toast.error("An error occured");
      setLoading(false);
    }
  };

  return (
    <div className="px-8 md:px-16">
      <div className="my-10 flex justify-between w-full">
        <h1 className="font-bold text-4xl text-red-700">Quote details</h1>
        <button
          onClick={sendEmail}
          disabled={loading}
          className="p-2 font-bold text-white bg-red-700 h-fit rounded-lg"
        >
          {loading ? "Sending..." : "Send Quotation"}
        </button>
      </div>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-3 shadow-lg p-5 border rounded-2xl">
        <div>
          <h1 className="flex items-center gap-2 mt-5 text-red-700 font-bold text-xl">
            <span className="text-red-700">
              <IoPerson />
            </span>
            <span>Name</span>
          </h1>
          <p className="text-lg mt-1">
            {data?.fname} {data?.lname}
          </p>
        </div>
        <div>
          <h1 className="flex items-center gap-2 mt-5 text-red-700 font-bold text-xl">
            <span className="text-red-700">
              <MdEmail />
            </span>
            <span>Email</span>
          </h1>
          <p className="text-lg mt-1">{data?.email}</p>
        </div>
        <div>
          <h1 className="flex items-center gap-2 mt-5 text-red-700 font-bold text-xl">
            <span className="text-red-700">
              <FaPhoneAlt />
            </span>
            <span>Phone Number</span>
          </h1>
          <p className="text-lg mt-1">{data?.phone}</p>
        </div>
        <div>
          <h1 className="flex items-center gap-2 mt-5 text-red-700 font-bold text-xl">
            <span className="text-red-700">
              <MdDateRange />
            </span>
            <span>Date Of Birth</span>
          </h1>
          <p className="text-lg mt-1">{data?.dob}</p>
        </div>
        <div>
          <h1 className="flex items-center gap-2 mt-5 text-red-700 font-bold text-xl">
            <span className="text-red-700">
              <FaPassport />
            </span>
            <span>Nationality</span>
          </h1>
          <p className="text-lg mt-1">{data?.nationality}</p>
        </div>
        <div>
          <h1 className="flex items-center gap-2 mt-5 text-red-700 font-bold text-xl">
            <span className="text-red-700">
              <FaAddressCard />
            </span>
            <span>UAE Liscence</span>
          </h1>
          <p className="text-lg mt-1">{data?.uaeLiscence}</p>
        </div>
        <div>
          <h1 className="flex items-center gap-2 mt-5 text-red-700 font-bold text-xl">
            <span className="text-red-700">
              <FaAddressCard />
            </span>
            <span>Home Country Liscence</span>
          </h1>
          <p className="text-lg mt-1">{data?.homeCountryLiscence}</p>
        </div>
        <div>
          <h1 className="flex items-center gap-2 mt-5 text-red-700 font-bold text-xl">
            <span className="text-red-700">
              <SiEmirates />
            </span>
            <span>Emirate of Registration</span>
          </h1>
          <p className="text-lg mt-1">{data?.emirateOfRegistration}</p>
        </div>
        <div>
          <h1 className="flex items-center gap-2 mt-5 text-red-700 font-bold text-xl">
            <span className="text-red-700">
              <MdDateRange />
            </span>
            <span>Vehicle Year of Registration</span>
          </h1>
          <p className="text-lg mt-1">{data?.yearOfRegistration}</p>
        </div>
        <div>
          <h1 className="flex items-center gap-2 mt-5 text-red-700 font-bold text-xl">
            <span className="text-red-700">
              <FaCarAlt />
            </span>
            <span>Vehicle Make</span>
          </h1>
          <p className="text-lg mt-1">{data?.vehicleMake}</p>
        </div>
        <div>
          <h1 className="flex items-center gap-2 mt-5 text-red-700 font-bold text-xl">
            <span className="text-red-700">
              <FaCarAlt />
            </span>
            <span>Vehicle Model</span>
          </h1>
          <p className="text-lg mt-1">{data?.vehicleModel}</p>
        </div>
        <div>
          <h1 className="flex items-center gap-2 mt-5 text-red-700 font-bold text-xl">
            <span className="text-red-700">
              <SiAdguard />
            </span>
            <span>Insurance Type</span>
          </h1>
          <p className="text-lg mt-1">{data?.insurance}</p>
        </div>
      </div>
    </div>
  );
};

export default page;
