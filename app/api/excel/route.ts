import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db/mongodb";
import Contact from "@/lib/db/models/contact";
import * as exceljs from "exceljs";
export const GET = async (req: NextRequest): Promise<NextResponse> => {
  try {
    await dbConnect();
    const result = await Contact.find().sort({ createdAt: -1 });
    const workbook = new exceljs.Workbook();
    const worksheet = workbook.addWorksheet("Contacts");
    worksheet.columns = [
      {
        header: "First Name",
        key: "fname",
        width: 20,
      },
      {
        header: "Last Name",
        key: "lname",
        width: 20,
      },
      {
        header: "Email",
        key: "email",
        width: 30,
      },
      {
        header: "Message",
        key: "message",
        width: 50,
      },
    ];
    result.map((d: any) => {
      worksheet.addRow(d);
    });
    worksheet.getRow(1).eachCell((c) => {
      c.font = { bold: true };
    });
    await workbook.xlsx.writeFile("Contacts.xlsx");
    return NextResponse.json({
      message: "Downlaoded Successfully",
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
