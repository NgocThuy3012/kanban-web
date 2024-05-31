"use client";

import { getData } from "@/api";
import { IGetError } from "@/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const CFood = () => {
  const path = useParams();
  const id = path.id.toString();

  const [data, setData] = useState<IGetError[] | null>(null);

  const fetchSpreadsheetData = async () => {
    try {
      const response = await getData({
        spreadsheetId: id,
        range: "Món ngon trong ngày",
      });

      // console.log("error", response.data);

      if (response.data) {
        const newData: IGetError[] = response.data.map((item) => ({
          content: item["DS MÓN NGÓN"],
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
    <div className=" flex flex-col col-span-2 gap-2">
      <div className="text-[#117DB7] font-bold flex justify-center">
        Món ngon trong ngày
      </div>
      <div className="flex-grow rounded-xl  border-slate-200 border-2 p-3">
        {data &&
          data.map((item, index) => (
            <div key={index} className="">
              {item.content}
            </div>
          ))}
      </div>
    </div>
  );
};

export default CFood;
