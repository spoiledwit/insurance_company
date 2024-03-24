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
import logo from "@/assets/veelsWhite.png";
import Link from "next/link";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import img from "@/assets/dubai.png";
const Footer = () => {
  return (
    <footer className="text-gray-100 bg-red-800">
      <div className="p-5 md:p-10">
        <div className="flex justify-between items-start flex-wrap gap-8">
          <div>
            <img src={logo.src} alt="logo" className="w-32" />
            <h3 className="text-sm font-semibold font-bask text-gray-100 ">
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
            <h3 className=" font-semibold  font-bask text-gray-100 ">Help</h3>
            <ul className="space-y-3 my-2 text-sm">
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
              <li>
                <Link href="/support">Contact Us</Link>
              </li>
              {/* <li className="flex items-center space-x-1">
                <CiChat2 className="text-white text-lg" />
                <Link href="">Live Chat</Link>
              </li> */}
              {/* <li>
                <Link href="">Sitemap</Link>
              </li> */}
            </ul>
          </div>
          <div className="max-w-[230px]">
            <h3 className=" font-semibold  font-bask  text-gray-100">
              Company
            </h3>
            <ul className="my-2 text-sm space-y-3">
              <li>
                <Link href="/company/about">About Us</Link>
              </li>
              <li>
                <Link href="/legal">Legal</Link>
              </li>
              {/* <li>
                <Link href="">Blog</Link>
              </li> */}
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bask font-semibold text-gray-100 ">
              Follow Us
            </h3>
            <ul className="mt-4 text-sm space-y-3 flex flex-col">
              <li className="flex items-center space-x-2">
                <FaFacebook className="text-white text-lg" />
                <a href="https://www.facebook.com/profile.php?id=61555890418092"
                  target="_blank"
                >Facebook</a>
              </li>
              <li className="flex items-center space-x-2">
                <FaInstagram className="text-white text-lg" />
                <a href="https://www.instagram.com/veeels_official/"
                  target="_blank"
                >Instagram</a>
              </li>
              <li className="flex items-center space-x-2">
                <FaLinkedinIn className="text-white text-lg" />
                <a href="https://www.linkedin.com/company/101528153"
                  target="_blank"
                >Linked In</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col xl:items-end">
            <h1 className="font-bold text-2xl text-white">Veeels.com</h1>
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
                <a href="mailto:support@veeels.com">support@veeels.com</a>
              </li>
              <li>
                <FaWhatsapp className="inline text-lg mr-2 text-white " />
                <a href="https://wa.me/971507114383">WhatsApp</a>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="block mr-2 text-white  text-lg" />
                <a href="https://www.google.com/maps/place/red-700+Look+Furniture+Upholstery/@25.2404742,55.2982395,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f4328f87955fd:0x4cb9e492abbf914e!8m2!3d25.2404742!4d55.3008144!16s%2Fg%2F11c5_sqvvy?entry=ttu">
                  International city france cluster p24 office s 11, Dubai, UAE
                </a>
              </li>
            </ul>
            <div className="my-3 flex items-center gap-3">
              <img src={img.src} alt="" className="w-20" />
              <div className="text-[10px] text-white">
                <p>Licensed By</p>
                <p>Dubai Economy Developement</p>
                <p className="text-blue-200">License Number 909796</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
