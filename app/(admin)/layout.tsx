"use client";
import useAuthStore from "@/store/authStore";
import React from "react";
import Login from "./login/page";

export default function layout({ children }: { children: React.ReactNode }) {
  const { user } = useAuthStore();

  if (!user) return <Login />;

  return <div>{children}</div>;
}
