const CKaizen = () => {
  return (
    <div className="grid grid-cols-3 bg-white rounded-lg p-5 gap-4">
      <div className=" flex flex-col">
        <div className="text-[#117DB7] font-medium flex justify-center">
          Góc Kazen
        </div>
        <div className="flex-grow rounded-xl bg-[#D9D9D9]"> </div>
      </div>
      <div className=" flex flex-col col-span-2">
        <div className="text-[#117DB7] font-medium flex justify-center">
          Món ngon trong ngày
        </div>
        <div className="flex-grow rounded-xl bg-[#D9D9D9]"> </div>
      </div>
    </div>
  );
};

export default CKaizen;
