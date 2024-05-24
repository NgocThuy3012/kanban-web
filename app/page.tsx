"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/data");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        console.log("data", jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // const googleDriveLink =
  //   "https://drive.google.com/file/d/10TTj7_Gs6l1Zr1ogIiocK1Fk5hSiqgs-/view?usp=drive_link";
  // const fileId = googleDriveLink?.match(/\/d\/(.*?)\//)[1];
  // const directLink = `https://drive.google.com/thumbnail?id=${fileId}`;
  return (
    <main className=" h-svh">
      <div className=" grid grid-cols-9 h-full p-2 gap-3">
        <div className=" col-span-2"></div>
        <div className=" col-span-3 grid grid-rows-2 gap-32">
          <div className=" h-full flex flex-col gap-4">
            <div className=" uppercase text-center font-semibold text-2xl">
              Chiến dịch <br /> nụ cười ICOOL
            </div>
            <div className=" grid grid-cols-2 flex-grow gap-14">
              <div className=" grid grid-cols-2 gap-5">
                <div className=" rounded-xl bg-slate-300 flex justify-center items-center ">
                  Giải tuần 1
                </div>
                <div className=" rounded-xl bg-slate-300 flex justify-center items-center ">
                  Giải tuần 2
                </div>
                <div className=" rounded-xl bg-slate-300 flex justify-center items-center ">
                  Giải tuần 3
                </div>
                <div className=" rounded-xl bg-slate-300 flex justify-center items-center ">
                  Giải tuần 4
                </div>
              </div>
              <div className=" rounded-xl bg-slate-300 flex justify-center items-center text-center">
                ICOOLER đạt giải tại chiến dịch Nụ Cười ICOOL tháng
              </div>
            </div>
          </div>
          <div>
            <div className=" uppercase text-center font-semibold text-2xl">
              Góc KAIZEN
            </div>
            <div className=" grid grid-cols-4">
              <div>
                <div className="bg-[#1E5CFA] text-white font-bold uppercase rounded-lg text-2xl font-serif flex justify-center px-2 py-1 w-max">
                  ideas
                </div>
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
              <div className=" rounded-xl bg-slate-300 flex justify-center items-center h-4/5 text-center">
                Các giải tay nghề
              </div>
              <div className=" rounded-xl bg-slate-300 flex justify-center items-center h-4/5 text-center">
                Các giải tay nghề
              </div>
              <div className=" rounded-xl bg-slate-300 flex justify-center items-center h-4/5 text-center">
                Các giải tay nghề
              </div>
              <div className=" rounded-xl bg-slate-300 flex justify-center items-center h-4/5 text-center">
                Các giải tay nghề
              </div>
            </div>
          </div>
          <div className=" flex gap-2 flex-grow">
            <div className=" w-7/12">Sơ đồ thăng tiến</div>

            <div className=" flex flex-col gap-6 flex-grow">
              <div className=" uppercase text-center font-semibold text-2xl">
                Lịch làm việc
              </div>
              <div className=" bg-[#C8CBD5] px-5 pt-7 pb-[35%] flex-grow rounded-lg">
                <div className=" flex bg-stone-900 w-full h-full"></div>
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
              <div className=" flex bg-stone-900 w-full h-full"></div>
            </div>
          </div>
          <div className=" flex flex-col gap-2">
            <div className=" uppercase text-center font-semibold text-2xl">
              Lỗi cần tránh
            </div>
            <div className=" bg-[#C8CBD5] px-5 pt-7 pb-[35%] flex-grow rounded-lg">
              <div className=" flex bg-stone-900 w-full h-full"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
