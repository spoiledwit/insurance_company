import bcrypt from "bcrypt";
import AuthModel from "@/lib/db/models/auth";
import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db/mongodb";
//login
export const POST = async (req: NextRequest): Promise<NextResponse> => {
  try {
    await dbConnect();
    const { email, password } = await req.json();

    // Check if the user exists
    const user = await AuthModel.findOne({ email });

    if (!user) {
      return NextResponse.json({
        status: "Error",
        message: "Invalid Email",
      });
    }

    // Validate password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return NextResponse.json({
        status: "Error",
        message: "Invalid Password",
      });
    }

    return NextResponse.json({
      user,
      message: "login successfull",
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
