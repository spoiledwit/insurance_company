import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Link from "next/link";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { CiChat2 } from "react-icons/ci";
const Footer = () => {
  return (
    <footer className="text-[#999DA9] bg-red-800">
      <div className="p-5 md:p-10">
        <div className="flex justify-between items-start flex-wrap gap-8">
          <div>
            <h3 className="text-gray-200 font-semibold  font-bask ">
              Car Insurance
            </h3>
            <ul className="space-y-3 my-2 text-sm">
              <li>
                <Link href="">Non-UAE Vihicles</Link>
              </li>
              <li>
                <Link href="">UAE Vihicles</Link>
              </li>
            </ul>
            <h3 className="mt-5 font-semibold font-bask text-gray-200 ">
              Travel Insurance
            </h3>
            <ul className="space-y-3 my-2 text-sm">
              <li>
                <Link href="">Inbound Visit Visa</Link>
              </li>
              <li>
                <Link href="">Health Insurance</Link>
              </li>
              <li>
                <Link href="">Home Insurance</Link>
              </li>
              <li>
                <Link href="">Pet Insurance</Link>
              </li>
            </ul>
            <h3 className="text-sm mt-5 font-semibold font-bask text-gray-200 ">
              Your Secure Payment options
            </h3>
            <div className="my-2 flex space-x-2 items-center">
              <img
                src="https://www.shory.com/images/logo/mastercard.svg"
                alt="1"
                className="w-10"
              />
              <img
                src="https://www.shory.com/images/logo/visa.svg"
                alt="2"
                className="w-10"
              />
              <img
                src="https://www.shory.com/images/logo/apple-pay.svg"
                alt="3"
                className="w-10"
              />
              <img
                src="https://www.shory.com/images/logo/tabby.svg"
                alt="4"
                className="w-10"
              />
            </div>
          </div>
          <div>
            <h3 className=" font-semibold  font-bask text-gray-200 ">Help</h3>
            <ul className="space-y-3 my-2 text-sm">
              <li>
                <Link href="">FAQ</Link>
              </li>
              <li className="flex items-center space-x-1">
                <CiChat2 className="text-white text-lg" />
                <Link href="">Live Chat</Link>
              </li>
              <li>
                <Link href="">Sitemap</Link>
              </li>
            </ul>
          </div>
          <div className="max-w-[230px]">
            <h3 className=" font-semibold  font-bask  text-gray-200">
              Company
            </h3>
            <ul className="my-2 text-sm space-y-3">
              <li>
                <Link href="">About Us</Link>
              </li>
              <li>
                <Link href="">Legal</Link>
              </li>
              <li>
                <Link href="">Blog</Link>
              </li>
              <li>
                <Link href="">Privicy Policy</Link>
              </li>
              <li>
                <Link href="">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bask font-semibold text-gray-200 ">
              Follow Us
            </h3>
            <ul className="mt-4 text-sm space-y-3 flex flex-col">
              <li className="flex items-center space-x-2">
                <FaFacebook className="text-white text-lg" />
                <a href="">Facebook</a>
              </li>
              <li className="flex items-center space-x-2">
                <FaInstagram className="text-white text-lg" />
                <a href="">Instagram</a>
              </li>
              <li className="flex items-center space-x-2">
                <FaXTwitter className="text-white text-lg" />
                <a href="">Twitter</a>
              </li>
              <li className="flex items-center space-x-2">
                <FaLinkedinIn className="text-white text-lg" />
                <a href="">Linked In</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col xl:items-end">
            <h1 className="font-bold text-2xl text-white">Car Insurance Co.</h1>
            <ul className="mt-4 space-y-3 flex flex-col xl:items-end text-sm">
              <li>
                <FaPhone className="rotate-90 text-white inline mr-2" />
                +971 55 5555555
              </li>
              <li>
                <TbDeviceLandlinePhone className="inline text-white mr-2" />
                +971 4 555555
              </li>
              <li>
                <FaEnvelope className="inline text-white  mr-2" />
                <a href="mailto:test.com"> info@carinsurance.com</a>
              </li>
              <li>
                <FaWhatsapp className="inline text-lg mr-2 text-white " />
                <a href="https://wa.me/971507114383"> +971 55 5555555</a>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="block mr-2 text-white  text-lg" />
                <a href="https://www.google.com/maps/place/red-700+Look+Furniture+Upholstery/@25.2404742,55.2982395,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f4328f87955fd:0x4cb9e492abbf914e!8m2!3d25.2404742!4d55.3008144!16s%2Fg%2F11c5_sqvvy?entry=ttu">
                  International city france cluster p24 office s 11, Dubai, UAE
                </a>
              </li>
            </ul>
            <div className="my-3 flex items-center space-x-2">
              <img
                src="https://www.shory.com/images/support/play-store.svg"
                alt="1"
                className="w-36"
              />
              <img
                src="https://www.shory.com/images/support/app-store.svg"
                alt="2"
                className="w-36"
              />
            </div>
            <div className="my-3 flex items-center">
              <img
                src="https://www.shory.com/images/logo/mof_logo1.svg"
                alt=""
                className="w-10"
              />
              <div className="text-[10px] text-white">
                <p>Licensed By</p>
                <p>Central Bank of UAE</p>
                <p className="text-blue-200">License Number 287</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 text-xs">
          <p>
            Car Insurance LLC is authorized and regulated by the Central Bank of
            the UAE. Car Insurance Brokers is a licensed broker by the Central
            Bank with License Number 287.
          </p>
          <p>
            Car Insurance Brokers LLC is located in International city france
            cluster p24 office s 11, Dubai, UAE. © 2023 Car Insurance Co. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
