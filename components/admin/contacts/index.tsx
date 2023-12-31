"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from "axios";
import { toast } from "@/components/ui/use-toast";

const Contacts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("api/contact");
      setData(response.data.result);
    };
    getData();
  }, []);

  const download = async () => {
    const response = await axios.get("api/excel");
    toast({ title: response.data.message });
  };

  return (
    <div className="px-16 min-h-screen">
      <div className="my-10 flex justify-between w-full">
        <h1 className="font-bold text-4xl text-red-600">Contacts</h1>
        <button
          className="p-2 text-white bg-red-600 h-fit rounded-lg"
          onClick={download}
        >
          Download Data
        </button>
      </div>

      <Table>
        <TableCaption>A list of incoming inquiries.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>First Name</TableHead>
            <TableHead>Last Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Message</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((d: any) => (
            <TableRow>
              <TableCell>{d.fname}</TableCell>
              <TableCell>{d.lname}</TableCell>
              <TableCell>{d.email}</TableCell>
              <TableCell>{d.message}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Contacts;
