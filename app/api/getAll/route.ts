import { getRecordsAll } from "@/common/googleSheetService";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const spreadsheetId = "1z6dYxh8jHIv25uDShswmuuZutvD97d4P0B47LPn3nR8";
    // const range = req.nextUrl.searchParams.get("range");

    if (!spreadsheetId) {
      return NextResponse.json(
        {
          error:
            "Missing required query parameters: spreadsheetId and/or range",
        },
        { status: 400 }
      );
    }

    // console.log("Fetching data with", spreadsheetId, range);

    const data = await getRecordsAll(spreadsheetId);

    return NextResponse.json({ data: data }, { status: 200 });
  } catch (error) {
    console.error("Error fetching records:", error);
    return NextResponse.json(
      { error: "Failed to fetch records" },
      { status: 500 }
    );
  }
}
