const CError = () => {
  return (
    <div className="flex-col bg-white rounded-lg flex p-5 gap-2">
      <div className="text-[#117DB7] font-medium flex justify-center">
        Lỗi cần tránh
      </div>
      <div className=" grid grid-cols-2 flex-grow gap-4">
        <div className=" flex flex-col">
          <div className=" font-medium"> Lỗi nội bộ ghi nhận</div>
          <div className=" rounded-xl bg-[#D9D9D9] flex-grow"> </div>
        </div>
        <div className=" flex flex-col">
          <div className=" font-medium"> Lỗi IC ghi nhận/Hotline</div>
          <div className=" rounded-xl bg-[#D9D9D9] flex-grow"> </div>
        </div>
      </div>
    </div>
  );
};

export default CError;
