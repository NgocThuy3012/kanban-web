const CCalendar = () => {
  return (
    <div className="flex-col bg-white rounded-lg flex p-5 gap-2">
      <div className="text-[#117DB7] font-medium flex justify-center">
        Lịch làm việc
      </div>
      <div className=" grid grid-cols-3 flex-grow gap-4">
        <div className="">
          <div className=" flex justify-center font-medium">Ca Sáng</div>
        </div>
        <div className=" border-x-2">
          <div className=" flex justify-center font-medium"> Ca Tối</div>
        </div>
        <div className=" ">
          <div className=" flex justify-center font-medium">Ca Khuya</div>
        </div>
      </div>
    </div>
  );
};

export default CCalendar;
