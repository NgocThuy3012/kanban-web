import { google } from "googleapis";

const SHEET_ID = "1MCUoHrTrZ1LilYjupc8hWVpg9W5_zebQDdX4jxwxHYs";
const SHEET_NAME = "trang1";

export async function getRecords(auth: any) {
  const googleSheetApi = google.sheets({ version: "v4", auth: auth });
  const readOptions = {
    spreadsheetId: SHEET_ID,
    range: SHEET_NAME,
  };

  let dataFromSheet = await googleSheetApi.spreadsheets.values.get(readOptions);
  let allRecords = dataFromSheet.data.values;
  console.log(allRecords);

  return allRecords;
}
