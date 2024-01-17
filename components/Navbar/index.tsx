"use client";
import React, { useState } from "react";
import { navLinks } from "@/constants";
import { BiSolidChevronDown } from "react-icons/bi";

import Link from "next/link";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(-1);
  return (
    <div className="px-8 md:px-16 py-5 shadow flex justify-between w-full bg-white items-center">
      <Link href="/" className="font-bold text-red-600 text-2xl">
        Veeels.com
      </Link>

      <div className="text-sm sm:text-base items-center justify-center gap-2 sm:gap-5 flex">
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
      </div>
    </div>
  );
};

export default Navbar;
