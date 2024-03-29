"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useAuthStore from "@/store/authStore";
import { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { setUser } = useAuthStore();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill all the fields");
      return;
    }
    try {
      setLoading(true);
      const response = await axios.post("/api/auth/login", {
        email,
        password,
      });
      setUser(response.data.user);
      setLoading(false);
      toast(response.data.message);
    } catch (error: any) {
      setLoading(false);
      if (error.response?.data) {
        toast.error(error.response.data);
        return;
      }
    }
  };

  return (
    <div className="h-[80vh] flex items-center justify-center">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="md:w-1/2 md:border p-10 md:shadow"
      >
        <h1 className="font-bold text-red-700 text-3xl my-2">
          Sign in to your account
        </h1>
        <p className="mb-5 text-sm text-gray-500">
          Enter your email and password below to sign in
        </p>
        <Input
          className="w-full my-2"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          className="w-full my-2"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button className="my-2 w-full bg-red-700">
          {!loading ? (
            "Sign In"
          ) : (
            <span className="rounded-full animate-spin border-t-4 border-white w-6 h-6 flex items-center justify-center"></span>
          )}
        </Button>
      </form>
    </div>
  );
};

export default Login;
