import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Link from "next/link";
import { TbDeviceLandlinePhone } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 px-16 border-t border-t-red-700">
      <div className="py-12 md:px-16 px-8">
        <div className="flex justify-between flex-wrap gap-8">
          <div className="max-w-[450px]">
            <h3 className="text-xl font-semibold font-bask mb-2 tracking-wider uppercase text-black">
              Sign Up!
            </h3>
            <p className="text-gray-700 font-light text-xs mt-2">
              Get regular updates about our products, services, and special
              offers, straight to your inbox. You can unsubscribe at any time.
            </p>
            <form className="flex mt-4 flex-col sm:flex-row sm:items-end">
              <button
                type="submit"
                className="py-2 px-6 max-w-[260px] border border-transparent text-sm font-medium rounded-full text-white bg-red-700 hover:bg-red-600 transition-colors duration-200"
              >
                Sign up for our E-Newsletter
              </button>
              <br />
            </form>
            <div className="flex space-x-3 mt-6">
              <a
                href=""
                target="_blank"
              >
                <FaFacebookF className=" text-white bg-red-700 rounded-full p-[5px] text-2xl cursor-pointer" />
              </a>
              <a
                href=""
                target="_blank"
              >
                <FaInstagram className="text-white bg-red-700 rounded-full p-[5px] text-2xl cursor-pointer" />
              </a>
              <a
                href=""
                target="_blank"
              >
                <FaLinkedinIn className="text-white bg-red-700 rounded-full p-[5px] text-2xl cursor-pointer" />
              </a>
            </div>
            <a
              className="flex flex-col mt-5"
              href="https://www.google.com/maps/place/Mostery/@25.2404742,55.2982395,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f4328f87955fd:0x4cb9e492abbf914e!8m2!3d25.2404742!4d55.3008144!16s%2Fg%2F11c5_sqvvy?entry=ttu"
              target="_blank"
            >
              <img
                src="https://marketingintegration.co.uk/wp-content/uploads/2022/05/marketing-integration-google-reviews-badge.jpg"
                width={150}
                height={150}
                className="ml-[-17px]"
                alt="visa"
              />
            </a>
          </div>

          <div className="max-w-[230px]">
            <h3 className="text-xl font-semibold  font-bask tracking-wider uppercase text-black">
              Contact Us
            </h3>
            <ul className="mt-4 text-sm space-y-2">
              <li>
                <FaPhone className="rotate-90 text-red-700 inline mr-2" />
                +971 55 5555555
              </li>
              <li>
                <TbDeviceLandlinePhone className="inline text-red-700 mr-2" />
                +971 4 555555
              </li>
              <li>
                <FaEnvelope className="inline text-red-700  mr-2" />
                <a href="mailto:test.com"> info@carinsurance.com</a>
              </li>
              <li>
                <FaWhatsapp className="inline text-lg mr-2 text-red-700 " />
                <a href="https://wa.me/971507114383"> +971 55 5555555</a>
              </li>
              <li className="flex">
                <FaMapMarkerAlt className="block mr-2 text-red-700  text-2xl" />
                <a href="https://www.google.com/maps/place/red-700+Look+Furniture+Upholstery/@25.2404742,55.2982395,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f4328f87955fd:0x4cb9e492abbf914e!8m2!3d25.2404742!4d55.3008144!16s%2Fg%2F11c5_sqvvy?entry=ttu">
                  1 2 3 Street Name, Dubai, UAE
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bask font-semibold tracking-wider uppercase text-black">
              Our
              <span className=" text-red-700 px-1 italic">Services!</span>
            </h3>
            <ul className="mt-4 text-sm space-y-2 flex flex-col">
              <Link href={"/services/upholstery"}>Car Insurance</Link>
              <Link href={"/services/upholstery"}>Home Insurance</Link>
              <Link href={"/services/upholstery"}>Life Insurance</Link>
              <Link href={"/services/upholstery"}>Health Insurance</Link>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold font-bask tracking-wider uppercase text-black">
              About us
            </h3>
            <ul className="mt-4 space-y-2 flex flex-col text-sm">
              <Link
                href="/about-us"
                className="hover:text-red-700 hover:underline"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="hover:text-red-700 hover:underline"
              >
                Contact Us
              </Link>
            </ul>
          </div>
        </div>

        <div className="md:col-span-3 mt-12 border-t border-gray-300 pt-8">
          <p className="text-center text-sm">
            &copy; 2023 red-700 Furnishing Dubai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
