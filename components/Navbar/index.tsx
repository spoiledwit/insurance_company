"use client";
import React from "react";
import { navLinks } from "@/constants";
import { NavigationMenu } from "@/components/ui/navigation-menu";

import Link from "next/link";

const Navbar = () => {
  return (
    <div className="px-16 py-5 shadow flex justify-between w-full bg-white items-center">
      <h1 className="font-bold text-red-600 text-2xl">Car Insurance Co.</h1>

      <NavigationMenu
      className="flex gap-5 py-2"
      >
        {navLinks.map((navLink, index) => (
          <Link href={navLink.title} key={index}>
            <p
            className="cursor-pointer hover:text-red-500 transition-all"
            >{navLink.title}</p>
          </Link>
        ))}
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
