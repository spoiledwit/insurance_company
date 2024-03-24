import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db/mongodb";
import Quotes from "@/lib/db/models/quotes";
import nodemailer from "nodemailer";
import { emailTemplate } from "@/lib/utils/emailTemplate";

export const PUT = async (
  req: NextRequest,
  { params }: { params: { slug: Array<[]> } }
): Promise<NextResponse> => {
  try {
    await dbConnect();
    const id = params.slug[0];
    const { isReplied } = await req.json();
    const result = await Quotes.findByIdAndUpdate(id, {
      isReplied,
    });
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
      vehicleYear,
      vehicleModel,
      insurance,
    } = await Quotes.findById(id);
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "tbcgulfmarketing@gmail.com",
        pass: "gyqj dwxp nrmo qobv",
      },
    });

    const mailOptions = {
      from: "tbcgulfmarketing@gmail.com",
      to: email,
      subject: "New Enquiry Received from Website",
      html: emailTemplate(
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
        insurance
      ),
    };
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      message: "Email Sent Successfully",
      status: "success",
      result,
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

export const GET = async (
  req: NextRequest,
  { params }: { params: { slug: Array<[]> } }
): Promise<NextResponse> => {
  try {
    await dbConnect();
    const id = params.slug[0];
    const result = await Quotes.findById(id);
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
