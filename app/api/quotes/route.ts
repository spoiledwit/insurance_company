import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db/mongodb";
import Qoutes from "@/lib/db/models/quotes";
import nodemailer from "nodemailer";

export const GET = async (req: NextRequest): Promise<NextResponse> => {
  try {
    await dbConnect();
    const result = await Qoutes.find().sort({ createdAt: -1 });
    return NextResponse.json({
      result,
      status: "success",
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: "Error",
        message: "Something Went Wrong",
        error: error,
      },
      {
        status: 500,
      }
    );
  }
};

export const POST = async (req: NextRequest): Promise<NextResponse> => {
  try {
    await dbConnect();
    const {
      fname,
      lname,
      email,
      phone,
      dob,
      nationality,
      uaeLiscence,
      homeCountryLiscence,
      emirateOfRegistration,
      yearOfRegistration,
      vehicleMake,
      vehicleModel,
      insurance,
    } = await req.json();
    const result = await Qoutes.create({
      fname,
      lname,
      email,
      phone,
      dob,
      nationality,
      uaeLiscence,
      homeCountryLiscence,
      emirateOfRegistration,
      yearOfRegistration,
      vehicleMake,
      vehicleModel,
      insurance,
    });
    // const transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     user: "tbcgulfmarketing@gmail.com",
    //     pass: "gyqj dwxp nrmo qobv",
    //   },
    // });

    // const mailOptions = {
    //   from: "tbcgulfmarketing@gmail.com",
    //   to: "info@carinsurance.com",
    //   subject: "New Enquiry Received from Website",
    //   text: `You have a new enquiry from the website:

    //              Name: ${fname} ${lname}
    //              Email: ${email}
    //              Message: ${message}`,
    // };
    // await transporter.sendMail(mailOptions);

    return NextResponse.json({
      result,
      message: "Enquiry Sent Successfully",
      status: "success",
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: "Error",
        message: "Something Went Wrong",
        error: error,
      },
      {
        status: 500,
      }
    );
  }
};
