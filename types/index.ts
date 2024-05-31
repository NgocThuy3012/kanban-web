import { AxiosResponse } from "axios";

export type IApiResponse<E = any> = AxiosResponse<IGetResponse[], E>;

export interface IDataResponse<T> {
  data: T;
}

export interface IGetsParams {
  spreadsheetId: string;
  range: string;
}

export interface IGetResponse {
  "CHỨC VỤ"?: string;
  LINK?: string;
  "ẢNH GROUP"?: string;
  "LINK GROUP"?: string;
  "TÊN CHƯƠNG TRÌNH"?: string;
  "TÊN THÔNG BÁO"?: string;
  "TÊN KAIZEN"?: string;
  "LỖI IC"?: string;
  "LỖI HOTLINE"?: string;
  "DS LỖI NỘI BỘ"?: string;
  "VUA BÁN HÀNG"?: string;
  THÁNG?: string;
  "TBB CAO NHẤT"?: string;
  "DTH CAO NHẤT"?: string;
  "TÊN GIẢI THƯỞNG"?: string;
  "DS MÓN NGÓN"?: string;
  "CA SÁNG"?: string;
  "CA TỐI"?: string;
  "CA KHUYA"?: string;
}

export interface IGetromotion {
  position?: string;
  link?: string;
}

export interface IGetImage {
  title?: string;
  link?: string;
}

export interface IGetGroup {
  image?: string;
  link?: string;
}

export interface IGetIC {
  ic?: string[];
  hotline?: string[];
}

export interface IGetError {
  content?: string;
}

export interface IGetStaff {
  month?: string;
  dth?: string;
  tbb?: string;
  sale?: string;
}

export interface IGetCalendar {
  mor?: string[];
  eve?: string[];
  late?: string[];
}
