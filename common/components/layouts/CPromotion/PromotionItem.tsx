import { IGetromotion } from "@/types";
import CModal from "../../others/CModal";
import { useState } from "react";

const PromotionItem = ({ data }: { data: IGetromotion }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className=" underline" onClick={() => setOpen(true)}>
        {data.position}
      </div>
      <CModal isOpen={open} onClose={() => setOpen(false)}>
        <div className=" w-full h-full">
          {data.link && (
            <iframe
              src={data.link}
              width="100%"
              height="100%"
              frameBorder="0"
              title="Google Sheet"
              style={{ border: "none" }}
            />
          )}
        </div>
      </CModal>
    </>
  );
};

export default PromotionItem;
