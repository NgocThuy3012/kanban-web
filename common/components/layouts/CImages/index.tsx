import { getData } from "@/api";
import { IGetImage } from "@/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const CImages = () => {
  const path = useParams();
  const id = path.id.toString();

  const [data, setData] = useState<IGetImage[] | null>(null);

  const fetchSpreadsheetData = async () => {
    try {
      const response = await getData({
        spreadsheetId: id,
        range: "Hình ảnh!A:B",
      });

      const result: IGetImage[] = [];

      if (response.data) {
        response.data.forEach((item) => {
          for (const [key, value] of Object.entries(item)) {
            if (
              typeof value === "string" &&
              value.includes("drive.google.com")
            ) {
              const match = value.match(/\/d\/(.*?)\//);
              if (match && match[1]) {
                const fileId = match[1];
                const directLink = `https://drive.google.com/thumbnail?id=${fileId}`;
                result.push({ title: key, link: directLink });
              } else {
                result.push({ title: key, link: value });
              }
            } else {
              result.push({ title: key, link: value });
            }
          }
        });

        setData(result);
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
    <>
      {data ? (
        data.map((item, index) => (
          <div className=" flex flex-col gap-2" key={index}>
            <div className=" text-[#117DB7] font-bold flex">{item.title}</div>

            {item.link ? (
              <img
                src={item?.link}
                alt=""
                width={230}
                height={230}
                className=" w-full h-auto object-cover rounded-xl"
              />
            ) : (
              <div className="flex-grow rounded-xl border-slate-200 border-2"></div>
            )}
          </div>
        ))
      ) : (
        <>
          <div className=" flex flex-col gap-2">
            <div className=" text-[#117DB7] font-bold flex">Happy birthday</div>

            <div className="flex-grow rounded-xl  border-slate-200 border-2"></div>
          </div>
          <div className=" flex flex-col gap-2">
            <div className=" text-[#117DB7] font-bold flex">Welcome</div>

            <div className="flex-grow rounded-xl  border-slate-200 border-2"></div>
          </div>
        </>
      )}
    </>
  );
};

export default CImages;
