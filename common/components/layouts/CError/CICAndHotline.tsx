"use client";

import { getData } from "@/api";
import { IGetIC } from "@/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const CICAndHotline = () => {
  const path = useParams();
  const id = path.id.toString();

  const [data, setData] = useState<IGetIC>({});

  const fetchSpreadsheetData = async () => {
    try {
      const response = await getData({
        spreadsheetId: id,
        range: "Lỗi IC/ Hotline",
      });

      const ic: string[] = [];
      const hotline: string[] = [];

      if (response.data) {
        response.data.forEach((item) => {
          item["LỖI IC"] && ic.push(item["LỖI IC"]);

          item["LỖI HOTLINE"] && hotline.push(item["LỖI HOTLINE"]);
        });

        setData({ ic: ic, hotline: hotline });
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
    <div className=" flex flex-col">
      <div className=" font-medium"> Lỗi IC ghi nhận/Hotline</div>
      <div className=" rounded-xl  border-slate-200 border-2 flex-grow p-3">
        {data.ic && (
          <div>
            <div className=" font-medium">LỖI IC :</div>
            <div className=" pl-2 font-light">
              {data.ic.map((item) => (
                <div key={item}>{item}</div>
              ))}
            </div>
          </div>
        )}
        {data.hotline && (
          <div>
            <div className=" font-medium">LỖI HOTLINE :</div>
            <div className=" pl-2 font-light">
              {data.hotline.map((item) => (
                <div key={item}>{item}</div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CICAndHotline;
