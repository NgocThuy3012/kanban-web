"use client";

import { getData } from "@/api";
import { IGetImage } from "@/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const CPrize = () => {
  const path = useParams();
  const id = path.id.toString();

  const [data, setData] = useState<IGetImage[] | null>(null);

  const fetchSpreadsheetData = async () => {
    try {
      const response = await getData({
        spreadsheetId: id,
        range: "Giải thưởng!A:B",
      });

      if (response.data) {
        const newData: IGetImage[] = response.data.map((item) => {
          const value = item["LINK"];
          if (typeof value === "string" && value.includes("drive.google.com")) {
            const match = value.match(/\/d\/(.*?)\//);
            if (match && match[1]) {
              const fileId = match[1];
              const directLink = `https://drive.google.com/thumbnail?id=${fileId}`;
              return {
                position: item["TÊN GIẢI THƯỞNG"],
                link: directLink,
              };
            }
          }
          return {
            position: item["TÊN GIẢI THƯỞNG"],
            link: "",
          };
        });

        if (newData.length > 0) setData(newData);
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
        Giải thưởng
      </div>
      <div className=" grid grid-cols-2 flex-grow gap-4">
        {data ? (
          <>
            {data.map((item, index) =>
              item.link ? (
                <img
                  src={item?.link}
                  alt=""
                  width={230}
                  height={230}
                  className=" w-full h-auto object-cover rounded-xl"
                  key={index}
                />
              ) : (
                <div
                  className="flex-grow rounded-xl  border-slate-200 border-2"
                  key={index}
                ></div>
              )
            )}
          </>
        ) : (
          <>
            <div className=" rounded-xl  border-slate-200 border-2"> </div>
            <div className="rounded-xl  border-slate-200 border-2 "> </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CPrize;
