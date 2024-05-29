"use client";

import { getData } from "@/api";
import { IGetGroup, IGetImage } from "@/types";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const CGroup = () => {
  const path = useParams();
  const id = path.id.toString();

  const [data, setData] = useState<IGetGroup>({});

  const fetchSpreadsheetData = async () => {
    try {
      const response = await getData({
        spreadsheetId: id,
        range: "ICOOL Vui Vẻ",
      });

      if (response.data && response.data.length > 0) {
        const item = response.data[0];
        const imageLink = item["ẢNH GROUP"];
        const groupLink = item["LINK GROUP"];

        if (
          typeof imageLink === "string" &&
          imageLink.includes("drive.google.com")
        ) {
          const match = imageLink.match(/\/d\/(.*?)\//);
          if (match && match[1]) {
            const fileId = match[1];
            const directLink = `https://drive.google.com/thumbnail?id=${fileId}`;
            setData({ image: directLink, link: groupLink });
          }
        }
      }
    } catch (error) {
      throw new Error("Error fetching data");
    }
  };

  useEffect(() => {
    fetchSpreadsheetData();
  }, [id]);

  return (
    <div className=" flex flex-col gap-2">
      <div className=" text-[#117DB7] font-medium flex">ICOOL Vui Vẻ</div>
      {data && data.image ? (
        <Link href={data.link || ""}>
          <img
            src={data.image}
            alt=""
            className=" object-cover w-full h-auto rounded-xl"
          />
        </Link>
      ) : (
        <div className="flex-grow rounded-xl bg-[#D9D9D9] "> </div>
      )}
    </div>
  );
};

export default CGroup;
