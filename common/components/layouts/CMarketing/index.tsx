"use client";

import { getData } from "@/api";
import { IGetromotion } from "@/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import MarketingItem from "./MarketingItem";

const CMarketing = () => {
  const path = useParams();
  const id = path.id.toString();

  const [data, setData] = useState<IGetromotion[] | null>(null);

  const fetchSpreadsheetData = async () => {
    try {
      const response = await getData({
        spreadsheetId: id,
        range: "Marketing",
      });

      if (response.data) {
        const newData: IGetromotion[] = response.data.map((item) => ({
          position: item["TÊN CHƯƠNG TRÌNH"],
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
    <div className=" flex flex-col gap-2 h-full">
      <div className=" text-[#117DB7] font-bold flex">Marketing</div>
      <div className="flex-grow rounded-xl  border-slate-200 border-2 p-5 flex flex-col gap-2">
        {data &&
          data?.map((item, index) => (
            <MarketingItem key={index} data={item} />
            // <div key={index}>
            //   <Link href={item.link || ""} className=" underline line-clamp-3">
            //     {item?.position}
            //   </Link>
            // </div>
          ))}
      </div>
    </div>
  );
};

export default CMarketing;
