const CCard = ({ className, label }: { className?: string; label: string }) => {
  return (
    <div
      className={`rounded-xl bg-slate-300 flex justify-center items-center text-center bg-cover bg-center 
        ${className}`}
      style={{
        backgroundImage: `url("/bg.png")`,
      }}
    >
      {label}
    </div>
  );
};

export default CCard;
