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
import { useRouter } from "next/navigation";
const page = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("/api/quotes");
      setData(response.data.result);
    };
    getData();
  }, []);
  return (
    <div className="px-8 md:px-16 min-h-screen overflow-hidden">
      <h1 className="my-10 font-bold text-4xl text-red-700">Quotes</h1>
      <Table className="text-sm whitespace-nowrap mb-5">
        <TableCaption>A list of incoming inquiries.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>First Name</TableHead>
            <TableHead>Last Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Nationality</TableHead>
            <TableHead>UAE Liscence</TableHead>
            <TableHead>Home Country Liscence</TableHead>
            <TableHead>Emirate of Resigtration</TableHead>
            <TableHead>Vehicle Year of Resigtration</TableHead>
            <TableHead>Vehicle Make</TableHead>
            <TableHead>Vehicle Model</TableHead>
            <TableHead>Insurance Type</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((d: any) => (
            <TableRow
              className="cursor-pointer hover:bg-red-100 transition duration-100"
              onClick={() => router.push(`/admin/quotes/${d._id}`)}
            >
              <TableCell>{d.fname}</TableCell>
              <TableCell>{d.lname}</TableCell>
              <TableCell>{d.email}</TableCell>
              <TableCell>{d.phone}</TableCell>
              <TableCell>{d.nationality}</TableCell>
              <TableCell>{d.uaeLiscence}</TableCell>
              <TableCell>{d.homeCountryLiscence}</TableCell>
              <TableCell>{d.emirateOfRegistration}</TableCell>
              <TableCell>{d.yearOfRegistration}</TableCell>
              <TableCell>{d.vehicleMake}</TableCell>
              <TableCell>{d.vehicleModel}</TableCell>
              <TableCell>{d.insurance}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default page;
