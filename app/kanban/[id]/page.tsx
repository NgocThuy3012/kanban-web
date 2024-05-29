"use client";

import CCalendar from "@/common/components/layouts/CCalendar";
import CError from "@/common/components/layouts/CError";
import CExcellentStaff from "@/common/components/layouts/CExcellentStaff";
import CKaizen from "@/common/components/layouts/CKaizen";
import CNotification from "@/common/components/layouts/CNotification";
import CPrize from "@/common/components/layouts/CPrize";
import CPromotion from "@/common/components/layouts/CPromotion";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const KanbanPage = () => {
  const path = useParams();

  const [id, setId] = useState("");

  useEffect(() => {
    if (path.id) {
      setId(path.id.toString());
    }
  }, [path]);
  console.log("path", path.id, id);
  return (
    <div className=" grid grid-cols-12 bg-sky-100 w-full h-screen p-2 gap-6">
      <div className=" col-span-3 rounded-lg p-5 bg-white">
        <CNotification />
      </div>
      <div className=" col-span-9 flex flex-col gap-3">
        <div className=" flex rounded-lg bg-white justify-center p-5 uppercase font-semibold text-2xl text-[#262626]">
          Bảng KANBAN
        </div>
        <div className=" flex-grow grid grid-rows-3 gap-3">
          <div className=" grid grid-cols-2 gap-3">
            <CPrize />
            <CExcellentStaff />
          </div>
          <div className=" grid grid-cols-2 gap-3">
            <CPromotion />
            <CKaizen />
          </div>
          <div className=" grid grid-cols-2 gap-3">
            <CCalendar />
            <CError />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KanbanPage;
