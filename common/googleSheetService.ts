import { google } from "googleapis";
import { join } from "path";

export async function getRecords(spreadsheetId: string, range: string) {
  const CREDENTIALS_PATH = join(process.cwd(), "googlesheet.json");

  const auth = new google.auth.GoogleAuth({
    keyFilename: CREDENTIALS_PATH,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const googleSheetApi = google.sheets({ version: "v4", auth: auth });
  const readOptions = {
    spreadsheetId: spreadsheetId,
    range: range,
  };

  let dataFromSheet = await googleSheetApi.spreadsheets.values.get(readOptions);
  let allRecords = dataFromSheet.data.values;
  // console.log(allRecords);

  return allRecords;
}

export async function getRecordsAll(spreadsheetId: string) {
  const CREDENTIALS_PATH = join(process.cwd(), "googlesheet.json");

  const auth = new google.auth.GoogleAuth({
    keyFilename: CREDENTIALS_PATH,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const googleSheetApi = google.sheets({ version: "v4", auth: auth });

  let dataFromSheet = await googleSheetApi.spreadsheets.get({
    spreadsheetId,
    includeGridData: true,
  });
  console.log(dataFromSheet.data.sheets?.[0].data?.[0]?.rowData?.[0]?.values);

  return dataFromSheet;
}
