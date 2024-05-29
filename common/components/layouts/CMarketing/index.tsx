"use client";

import { getData } from "@/api";
import { IGetromotion } from "@/types";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

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
    fetchSpreadsheetData();
  }, [id]);

  return (
    <div className=" flex flex-col gap-2 h-full">
      <div className=" text-[#117DB7] font-medium flex">Marketing</div>
      <div className="flex-grow rounded-xl bg-[#D9D9D9] p-5 flex flex-col gap-2">
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

export default CMarketing;
