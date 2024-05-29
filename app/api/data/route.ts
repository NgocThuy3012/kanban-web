import { getRecords } from "@/common/googleSheetService";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const spreadsheetId = req.nextUrl.searchParams.get("spreadsheetId");
    const range = req.nextUrl.searchParams.get("range");

    if (!spreadsheetId || !range) {
      return NextResponse.json(
        {
          error:
            "Missing required query parameters: spreadsheetId and/or range",
        },
        { status: 400 }
      );
    }

    console.log("Fetching data with", spreadsheetId, range);

    const data = await getRecords(spreadsheetId, range);

    if (data) {
      // Chuyển đổi mảng hai chiều thành mảng một chiều
      const flattenedData = data.slice(1).map((row) => {
        const obj: Record<string, any> = {};
        data[0].forEach((key, index) => {
          obj[key] = row[index] ? row[index] : "";
        });
        return obj;
      });

      return NextResponse.json({ data: flattenedData }, { status: 200 });
    }
  } catch (error) {
    console.error("Error fetching records:", error);
    return NextResponse.json(
      { error: "Failed to fetch records" },
      { status: 500 }
    );
  }
}
