"use client";

import { getData } from "@/api";
import { IGetromotion } from "@/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import KaizenItem from "./KaizenItem";
import CFood from "../CFood";

const CKaizen = () => {
  const path = useParams();
  const id = path.id.toString();

  const [data, setData] = useState<IGetromotion[] | null>(null);

  const fetchSpreadsheetData = async () => {
    try {
      const response = await getData({
        spreadsheetId: id,
        range: "Góc Kaizen",
      });

      if (response.data) {
        const newData: IGetromotion[] = response.data.map((item) => ({
          position: item["TÊN KAIZEN"],
          link: item["LINK"],
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
    <div className="grid grid-cols-3 bg-white rounded-lg p-5 gap-4">
      <div className=" flex flex-col gap-2">
        <div className="text-[#117DB7] font-bold flex justify-center">
          Góc Kazen
        </div>
        <div className="flex-grow rounded-xl  border-slate-200 border-2 p-4">
          {data &&
            data?.map((item, index) => (
              <KaizenItem key={index} data={item} />
              // <div key={index}>
              //   <Link
              //     href={item.link || ""}
              //     className=" underline line-clamp-3"
              //   >
              //     {item?.position}
              //   </Link>
              // </div>
            ))}
        </div>
      </div>
      <CFood />
    </div>
  );
};

export default CKaizen;
