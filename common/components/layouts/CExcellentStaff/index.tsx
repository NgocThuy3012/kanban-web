"use client";

import { getData } from "@/api";
import { IGetStaff } from "@/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const CExcellentStaff = () => {
  const path = useParams();
  const id = path.id.toString();

  const [data, setData] = useState<IGetStaff[] | null>(null);

  const fetchSpreadsheetData = async () => {
    try {
      const response = await getData({
        spreadsheetId: id,
        range: "Nhân viên xuất sắc!A:D",
      });

      if (response.data) {
        const newData: IGetStaff[] = response.data.map((item) => ({
          month: item["THÁNG"],
          sale: item["VUA BÁN HÀNG"],
          tbb: item["TBB CAO NHẤT"],
          dth: item["DTH CAO NHẤT"],
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
  }, [id]);

  return (
    <div className="flex-col bg-white rounded-lg flex p-5 gap-2">
      <div className="text-[#117DB7] font-bold flex justify-center">
        Nhân viên xuất sắc
      </div>
      <div className=" grid grid-cols-3 flex-grow gap-4">
        {data &&
          data.map((item, index) => (
            <div
              className=" rounded-xl  border-slate-200 border-2 p-4"
              key={index}
            >
              <div className=" flex justify-center font-semibold  mb-2">
                Tháng {item.month}
              </div>
              <div>
                <div className=" font-medium italic underline mr-2">
                  - DTH cao nhất:
                </div>
                <div className=" ml-3 font-light"> {item.dth}</div>
              </div>
              <div>
                <div className=" font-medium italic underline mr-2">
                  - TBB cao nhất:
                </div>
                <div className=" ml-3 font-light"> {item.tbb}</div>
              </div>
              <div>
                <div className=" font-medium italic underline">
                  - VUA BÁN HÀNG:
                </div>
                <div className=" ml-3 font-light">{item.sale}</div>
              </div>
            </div>
          ))}

        {/* <div className=" rounded-xl  border-slate-200 border-2 "> </div>
        <div className=" rounded-xl  border-slate-200 border-2 "> </div> */}
      </div>
    </div>
  );
};

export default CExcellentStaff;
