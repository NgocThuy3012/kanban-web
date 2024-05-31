"use client";

import { getData } from "@/api";
import { IGetCalendar, IGetIC } from "@/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const CCalendar = () => {
  const path = useParams();
  const id = path.id.toString();

  const [data, setData] = useState<IGetCalendar>({});

  const fetchSpreadsheetData = async () => {
    try {
      const response = await getData({
        spreadsheetId: id,
        range: "Lịch làm việc",
      });

      const mor: string[] = [];
      const eve: string[] = [];
      const late: string[] = [];

      if (response.data) {
        response.data.forEach((item) => {
          item["CA SÁNG"] && mor.push(item["CA SÁNG"]);

          item["CA TỐI"] && eve.push(item["CA TỐI"]);

          item["CA KHUYA"] && late.push(item["CA KHUYA"]);
        });

        setData({ mor: mor, eve: eve, late: late });
      }
    } catch (error) {
      throw new Error("Error fetching data");
    }
  };

  useEffect(() => {
    fetchSpreadsheetData();
  }, [id]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchSpreadsheetData();
    }, 7200000);
    // 7200000
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex-col bg-white rounded-lg flex p-5 gap-2">
      <div className="text-[#117DB7] font-bold flex justify-center">
        Lịch làm việc
      </div>
      <div className=" grid grid-cols-3 flex-grow gap-4">
        <div className="">
          <div className=" flex justify-center font-medium">Ca Sáng</div>
          <div className=" p-3">
            {data.mor && (
              <div className=" pl-2 font-light">
                {data.mor.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className=" border-x-2">
          <div className=" flex justify-center font-medium"> Ca Tối</div>
          <div className=" p-3">
            {data.eve && (
              <div className=" pl-2 font-light">
                {data.eve.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className=" ">
          <div className=" flex justify-center font-medium">Ca Khuya</div>
          <div className=" p-3">
            {data.late && (
              <div className=" pl-2 font-light">
                {data.late.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CCalendar;
