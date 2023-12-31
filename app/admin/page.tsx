"use client";
import Contacts from "@/components/admin/contacts";
import Login from "@/components/admin/login";
import useAuthStore from "@/store/authStore";
import React from "react";

const page = () => {
  const { user } = useAuthStore();
  return <div>{user ? <Contacts /> : <Login />}</div>;
};

export default page;
