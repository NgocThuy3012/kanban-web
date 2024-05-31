import { IApiResponse, IGetResponse, IGetsParams } from "@/types";
import http from "@/utils/axios/index";

export const getData = (params: IGetsParams): Promise<IApiResponse> => {
  return http.get("/api/data", { params });
};

export const getDataAll = (params: IGetsParams): Promise<IApiResponse> => {
  return http.get("/api/getAll", { params });
};
