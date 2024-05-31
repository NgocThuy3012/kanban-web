"use client";

import { useEffect } from "react";

import CCard from "@/common/components/others/CCard";

import http from "@/utils/axios/index";
import { useQuery } from "@tanstack/react-query";
import { getData } from "@/api";

export default function Home() {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await http.get("/api/data", {
  //         params: {
  //           spreadsheetId: "1MCUoHrTrZ1LilYjupc8hWVpg9W5_zebQDdX4jxwxHYs",
  //           range: "Trang tính2",
  //         },
  //       });

  //       console.log("data", response.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const fetchSpreadsheetData = async () => {
    try {
      const response = await getData({
        spreadsheetId: "1MCUoHrTrZ1LilYjupc8hWVpg9W5_zebQDdX4jxwxHYs",
        range: "Trang tính2",
      });
      console.log("data", response.data);
      return response.data;
    } catch (error) {
      throw new Error("Error fetching data");
    }
  };

  // const { data } = useQuery({
  //   queryKey: ["data"],
  //   queryFn: () => fetchSpreadsheetData(),
  // });

  // console.log("data", data);

  useEffect(() => {
    fetchSpreadsheetData();
  }, []);

  // const googleDriveLink =
  //   "https://drive.google.com/file/d/10TTj7_Gs6l1Zr1ogIiocK1Fk5hSiqgs-/view?usp=drive_link";
  // const fileId = googleDriveLink?.match(/\/d\/(.*?)\//)[1];
  // const directLink = `https://drive.google.com/thumbnail?id=${fileId}`;

  const image = "/note.jpg";
  return (
    <main className=" h-svh">
      {/* <div className=" grid grid-cols-9 h-full p-2 gap-3">
        <div className=" col-span-2 flex bg-sky-600"></div>
        <div className=" col-span-3 grid grid-rows-2 gap-32">
          <div className=" h-full flex flex-col gap-4">
            <div className=" uppercase text-center font-semibold text-2xl">
              Chiến dịch <br /> nụ cười ICOOL
            </div>
            <div className=" grid grid-cols-2 flex-grow gap-14">
              <div className=" grid grid-cols-2 gap-5">
                <CCard label="Giải tuần 1" />
                <CCard label="Giải tuần 2" />
                <CCard label="Giải tuần 3" />
                <CCard label="Giải tuần 4" />
              </div>

              <CCard label=" ICOOLER đạt giải tại chiến dịch Nụ Cười ICOOL tháng" />
            </div>
          </div>
          <div className=" flex flex-col gap-2">
            <div className=" uppercase text-center font-semibold text-2xl">
              Góc KAIZEN
            </div>
            <div className=" grid grid-cols-4 flex-grow gap-2">
              <div className=" flex flex-col justify-center">
                <div className=" flex justify-center">
                  <div className="bg-[#1E5CFA] text-white font-bold uppercase rounded-lg text-2xl font-serif flex justify-center px-2 py-1 w-max">
                    ideas
                  </div>
                </div>
                <div
                  style={{
                    backgroundImage: `url(${image})`,
                  }}
                  className=" flex-grow bg-cover bg-center"
                ></div>
              </div>
              <div className=" flex flex-col justify-center">
                <div className=" flex justify-center">
                  <div className="bg-[#1E5CFA] text-white font-bold uppercase rounded-lg text-2xl font-serif flex justify-center px-2 py-1 w-max">
                    to do
                  </div>
                </div>
                <div
                  style={{
                    backgroundImage: `url(${image})`,
                  }}
                  className=" flex-grow bg-cover bg-center"
                ></div>
              </div>
              <div className=" flex flex-col justify-center">
                <div className=" flex justify-center">
                  <div className="bg-[#1E5CFA] text-white font-bold uppercase rounded-lg text-2xl font-serif flex justify-center px-2 py-1 w-max">
                    doing
                  </div>
                </div>
                <div
                  style={{
                    backgroundImage: `url(${image})`,
                  }}
                  className=" flex-grow bg-cover bg-center"
                ></div>
              </div>
              <div className=" flex flex-col justify-center">
                <div className=" flex justify-center">
                  <div className="bg-[#1E5CFA] text-white font-bold uppercase rounded-lg text-2xl font-serif flex justify-center px-2 py-1 w-max">
                    done
                  </div>
                </div>
                <div
                  style={{
                    backgroundImage: `url(${image})`,
                  }}
                  className=" flex-grow bg-cover bg-center"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-span-3 flex flex-col">
          <div className=" flex flex-col h-2/5 mb-7 pr-5 gap-2">
            <div className=" w-full text-center text-4xl uppercase font-medium font-serif">
              Vinh danh giải tay nghề
            </div>
            <div className=" flex-grow grid grid-cols-4 gap-3">
              <CCard className="h-4/5" label="Các giải tay nghề" />
              <CCard className="h-4/5" label="Các giải tay nghề" />
              <CCard className="h-4/5" label="Các giải tay nghề" />
              <CCard className="h-4/5" label="Các giải tay nghề" />
            </div>
          </div>
          <div className=" flex gap-2 flex-grow">
            <div className=" w-7/12">Sơ đồ thăng tiến</div>

            <div className=" flex flex-col gap-6 flex-grow">
              <div className=" uppercase text-center font-semibold text-2xl">
                Lịch làm việc
              </div>
              <div className=" bg-[#C8CBD5] px-5 pt-7 pb-[35%] flex-grow rounded-lg">
                <div className=" flex bg-[#1B0000] w-full h-full"></div>
              </div>
            </div>
          </div>
        </div>
        <div className=" grid grid-rows-2 gap-14">
          <div className=" flex flex-col gap-2">
            <div className=" uppercase text-center font-semibold text-2xl">
              Cập nhật <br /> tình huống
            </div>
            <div className=" bg-[#C8CBD5] px-5 pt-7 pb-[35%] flex-grow rounded-lg">
              <div className=" flex bg-[#1B0000] w-full h-full">
                Cập nhật sổ tay tính huống mới
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-2">
            <div className=" uppercase text-center font-semibold text-2xl">
              Lỗi cần tránh
            </div>
            <div className=" bg-[#C8CBD5] px-5 pt-7 pb-[35%] flex-grow rounded-lg">
              <div className=" flex bg-[#1B0000] w-full h-full"></div>
            </div>
          </div>
        </div>
      </div> */}
    </main>
  );
}
