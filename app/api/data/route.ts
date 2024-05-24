import { getRecords } from "@/common/googleSheetService";
import { google } from "googleapis";
import { NextResponse } from "next/server";
import { join } from "path";

export async function GET() {
  try {
    const CREDENTIALS_PATH = join(process.cwd(), "googlesheet.json");

    const auth = new google.auth.GoogleAuth({
      keyFilename: CREDENTIALS_PATH,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    return NextResponse.json({ data: await getRecords(auth) }, { status: 200 });
  } catch (error) {
    console.log("error", error);
  }
}
