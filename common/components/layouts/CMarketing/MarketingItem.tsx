import { IGetromotion } from "@/types";
import { useEffect, useState } from "react";
import CModal from "../../others/CModal";

const MarketingItem = ({ data }: { data: IGetromotion }) => {
  const [open, setOpen] = useState(false);
  const [link, setLink] = useState("");

  useEffect(() => {
    if (data.link) {
      const match = data?.link.match(/\/d\/(.*?)\//);

      if (match && match[1]) {
        const fileId = match[1];
        const directLink = `https://drive.google.com/file/d/${fileId}/preview`;
        setLink(directLink);
      }
    }
  }, [data]);

  return (
    <>
      <div className=" underline" onClick={() => setOpen(true)}>
        {data.position}
      </div>
      <CModal isOpen={open} onClose={() => setOpen(false)}>
        <div className=" w-full h-full">
          {data.link && (
            <iframe
              src={link}
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

export default MarketingItem;
