import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import AuthModel from "@/lib/db/models/auth";
import { NextRequest, NextResponse } from "next/server";

const secret = process.env.JWT_SECRET;
if (!secret) {
  throw new Error("Please add your jwt_secret to environment variables");
}
// Register
export const POST = async (req: NextRequest): Promise<NextResponse> => {
  try {
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
    // Create token
    const token = jwt.sign({ email: user.email, id: user._id }, secret, {
      expiresIn: "1hr",
    });

    return NextResponse.json({
      user,
      token,
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
