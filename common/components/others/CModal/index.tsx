import { ReactNode } from "react";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const CModal = ({ isOpen, onClose, children }: PopupProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-white p-6 rounded-lg shadow-lg z-50 h-full w-4/5">
        <button
          className="absolute top-2 right-2 text-gray-600"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default CModal;
