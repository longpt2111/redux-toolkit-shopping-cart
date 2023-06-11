import React from "react";

interface IPropsTotalQuatityIcon {
  totalQuantity?: number;
}

const TotalQuatityIcon: React.FC<IPropsTotalQuatityIcon> = ({
  totalQuantity,
}) => {
  return (
    <div
      className={`absolute flex justify-center items-center rounded-full w-6 h-6 bg-[#EF4444] text-white text-sm ml-5 mb-5 ${
        totalQuantity && totalQuantity > 0 ? "" : "hidden"
      }`}
    >
      {totalQuantity}
    </div>
  );
};

export default TotalQuatityIcon;
