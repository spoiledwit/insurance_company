"use client";
import React, { useState } from "react";
import { navLinks, navLinksMobile } from "@/constants";
import { BiSolidChevronDown } from "react-icons/bi";
import { FaBars, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import logo from "@/assets/veels.jpg";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(-1);
  return (
    <div className="px-5 sm:px-8 md:px-16 py-5 shadow flex justify-between w-full bg-white items-center">
      <Link href="/" className="font-bold text-red-700 text-xl sm:text-2xl">
        Veeels.com
      </Link>

      <div className="hidden md:flex text-xs sm:text-base items-center justify-center gap-2 sm:gap-5">
        {navLinks.map((link, index) => (
          <div
            key={index}
            onMouseEnter={() => setActiveDropdown(index)}
            onMouseLeave={() => setActiveDropdown(-1)}
            className="relative"
          >
            <Link href={link.href} className="flex items-center">
              {link.title}
              {link.children && (
                <BiSolidChevronDown className="inline-block ml-1" />
              )}
            </Link>
            {link.children && activeDropdown === index && (
              <div className="text-black border absolute top-full left-[-10px] bg-white p-3 whitespace-nowrap rounded-lg shadow-lg">
                {link.children.map((child, childIndex) => (
                  <Link
                    key={childIndex}
                    href={child.href}
                    className="block p-2 text-sm rounded hover:bg-gray-200"
                  >
                    {child.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <button className="font-bold text-sm flex items-center py-2 px-3 bg-red-700 text-white rounded-lg shadow-lg hover:bg-red-800">
          <FaWhatsapp className="text-xl mr-2" />
          <a href="https://wa.me/971507114383">WhatsApp</a>
        </button>
      </div>
      <Sheet>
        <SheetTrigger className="md:hidden">
          <FaBars className="text-2xl" />
        </SheetTrigger>
        <SheetContent className="pt-10">
          {navLinksMobile.map((link, index) => (
            <Link href={link.href} className="block my-5 font-semibold text-xl">
              {link.title}
            </Link>
          ))}
          <button className="my-10 font-bold text-sm flex justify-center items-center w-full py-3 px-3 bg-red-700 text-white rounded-lg shadow-lg hover:bg-red-800">
            <FaWhatsapp className="text-xl mr-2" />
            <a href="https://wa.me/971507114383">WhatsApp</a>
          </button>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Navbar;
