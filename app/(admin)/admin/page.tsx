"use client";
import React, { useEffect, useState } from "react";
import Card from "@/components/admin/card";
import axios from "axios";

const page = () => {
  const [contacts, setContacts] = useState<any>([]);
  const [qoutes, setQuotes] = useState<any>([]);

  useEffect(() => {
    getContacts();
    getQuotes();
  }, []);

  const getContacts = async () => {
    const response = await axios.get("/api/contact");
    setContacts(response.data.result);
  };
  const getQuotes = async () => {
    const response = await axios.get("/api/quotes");
    setQuotes(response.data.result);
  };

  return (
    <div className="px-8 md:px-16">
      <h1 className="my-5 font-bold text-4xl text-red-700">Dashboard</h1>
      <div className="flex justify-center my-3 flex-wrap">
        <Card name="Total Contacts" value={contacts?.length.toString()} />
        <Card name="Total Quotes" value={qoutes?.length.toString()} />
        <Card
          name="Pending Quotes"
          value={qoutes?.filter((q: any) => !q.isReplied).length.toString()}
        />
      </div>
    </div>
  );
};

export default page;
