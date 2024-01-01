import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import AuthModel from "@/lib/db/models/auth";
import { NextRequest, NextResponse } from "next/server";
//login
export const POST = async (req: NextRequest): Promise<NextResponse> => {
  try {
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

    // Create token
    const token = jwt.sign({ email: user.email, id: user._id }, "abcd", {
      expiresIn: "1hr",
    });

    return NextResponse.json({
      user,
      token,
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
