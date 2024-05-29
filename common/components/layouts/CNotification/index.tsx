import Image from "next/image";
import logo from "../../../../asset/img/logo.png";
import CImages from "../CImages";
import CGroup from "../CGroup";
import CMarketing from "../CMarketing";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IGetromotion } from "@/types";
import { getData } from "@/api";
import Link from "next/link";

const CNotification = () => {
  const path = useParams();
  const id = path.id.toString();

  const [data, setData] = useState<IGetromotion[] | null>(null);

  const fetchSpreadsheetData = async () => {
    try {
      const response = await getData({
        spreadsheetId: id,
        range: "Thông báo",
      });

      if (response.data) {
        const newData: IGetromotion[] = response.data.map((item) => ({
          position: item["TÊN THÔNG BÁO"],
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

  console.log("noti", data);
  return (
    <div className=" flex flex-col gap-6 h-full">
      <div className=" flex justify-between w-full gap-8">
        <div>
          <Image src={logo} alt="" />
        </div>
        <div>
          <span className=" font-bold">Đến ICOOL</span> <br />
          <span className=" text-neutral-700">ai cũng là ca sĩ</span>
        </div>
      </div>
      <div className=" flex-grow grid grid-rows-2   gap-4">
        <div className=" grid-rows-2 grid gap-4">
          <div className=" grid grid-cols-2 gap-4">
            <CImages />
          </div>

          <div className=" grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <div className=" text-[#117DB7] font-medium flex">Thông báo</div>
              <div className=" flex-grow rounded-xl bg-[#D9D9D9]">
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
            <CGroup />
          </div>
        </div>
        <div>
          <CMarketing />
        </div>
      </div>
    </div>
  );
};

export default CNotification;
