import Link from "next/link";
import React from "react";
import { MdDashboard } from "react-icons/md";
import { RiContactsBook2Fill } from "react-icons/ri";
import { MdRequestQuote } from "react-icons/md";
const Sidebar = () => {
  return (
    <div className="w-1/5 bg-red-800 text-white p-10">
      <ul className="text-2xl  space-y-5">
        <li className="flex items-center space-x-3">
          <MdDashboard /> <Link href="/admin">Dashboard</Link>
        </li>
        <li className="flex items-center space-x-3">
          <MdRequestQuote /> <Link href="/admin/quotes">Quotes</Link>
        </li>
        <li className="flex items-center space-x-3">
          <RiContactsBook2Fill /> <Link href="/admin/contacts">Contacts</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
