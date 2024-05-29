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
