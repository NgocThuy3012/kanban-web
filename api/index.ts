import { IApiResponse, IGetResponse, IGetsParams } from "@/types";
import http from "@/utils/axios/index";

export const getData = (params: IGetsParams): Promise<IApiResponse> => {
  return http.get("/api/data", { params });
};
