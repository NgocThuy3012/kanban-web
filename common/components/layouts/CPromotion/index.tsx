"use client";

import { getData } from "@/api";
import { IGetromotion } from "@/types";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const CPromotion = () => {
  const path = useParams();
  const id = path.id.toString();

  const [data, setData] = useState<IGetromotion[] | null>(null);

  const fetchSpreadsheetData = async () => {
    try {
      const response = await getData({
        spreadsheetId: id,
        range: "Sơ đồ thăng tiến",
      });

      if (response.data) {
        const newData: IGetromotion[] = response.data.map((item) => ({
          position: item["CHỨC VỤ"],
          link: item["LINK"],
        }));
        setData(newData);
      }
    } catch (error) {
      throw new Error("Error fetching data");
    }
  };

  useEffect(() => {
    fetchSpreadsheetData();
  }, [id]);

  return (
    <div className="flex-col bg-white rounded-lg flex p-5 gap-2">
      <div className="text-[#117DB7] font-medium flex justify-center">
        Sơ đồ thăng tiến
      </div>
      <div className=" grid grid-cols-2 flex-grow ">
        {data &&
          data?.map((item, index) => (
            <div key={index}>
              <Link href={item.link || ""} className=" underline">
                {item?.position}
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CPromotion;
