"use client";

import { useParams } from "next/navigation";
import CICAndHotline from "./CICAndHotline";
import { useEffect, useState } from "react";
import { getData } from "@/api";
import { IGetError } from "@/types";

const CError = () => {
  const path = useParams();
  const id = path.id.toString();

  const [data, setData] = useState<IGetError[] | null>(null);

  const fetchSpreadsheetData = async () => {
    try {
      const response = await getData({
        spreadsheetId: id,
        range: "Lỗi nội bộ",
      });

      // console.log("error", response.data);

      if (response.data) {
        const newData: IGetError[] = response.data.map((item) => ({
          content: item["DS LỖI NỘI BỘ"],
        }));
        setData(newData);
      }
    } catch (error) {
      throw new Error("Error fetching data");
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchSpreadsheetData();
    }, 7200000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetchSpreadsheetData();
  }, [id]);

  return (
    <div className="flex-col bg-white rounded-lg flex p-5 gap-2">
      <div className="text-[#117DB7] font-bold flex justify-center">
        Lỗi cần tránh
      </div>
      <div className=" grid grid-cols-2 flex-grow gap-4">
        <div className=" flex flex-col">
          <div className=" font-medium"> Lỗi nội bộ ghi nhận</div>
          <div className=" rounded-xl  border-slate-200 border-2 flex-grow p-3">
            {data &&
              data.map((item, index) => (
                <div key={index} className=" font-light">
                  {item.content}
                </div>
              ))}
          </div>
        </div>
        <CICAndHotline />
      </div>
    </div>
  );
};

export default CError;
