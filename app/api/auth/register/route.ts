import bcrypt from "bcrypt";
import AuthModel from "@/lib/db/models/auth";
import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db/mongodb";

// Register
export const POST = async (req: NextRequest): Promise<NextResponse> => {
  try {
    await dbConnect();
    const { name, email, password } = await req.json();
    const oldUser = await AuthModel.findOne({ email });
    // Check if the user exists
    if (oldUser) {
      return NextResponse.json({
        status: "Error",
        message: "User Already Exists",
      });
    }
    // Create new user
    const user = await AuthModel.create({
      name,
      email,
      password: await bcrypt.hash(password, 10),
    });

    return NextResponse.json({
      user,
      message: "Registered Successfully",
      status: "success",
    });
  } catch (error) {
    return NextResponse.json({
      status: "Error",
      message: "Something Went Wrong",
      error: error,
    });
  }
};
