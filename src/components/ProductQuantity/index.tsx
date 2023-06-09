import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface IPropsProductQuantity {
  className?: string;
  quantity?: number;
  handleDecreaseQuantity(productId?: string): void;
  handleIncreaseQuantity(productId?: string): void;
}

const ProductQuantity: React.FC<IPropsProductQuantity> = ({
  className,
  quantity,
  handleDecreaseQuantity,
  handleIncreaseQuantity,
}) => {
  return (
    <div
      className={`flex items-center justify-between bg-gray-200 rounded-lg px-5 py-1 ${className}`}
    >
      <button
        className={`outline-none border-0 bg-transparent ${
          quantity === 1 ? "text-gray-300 cursor-default" : "text-orange-500"
        }`}
        onClick={() => handleDecreaseQuantity()}
      >
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <div className="text-black font-semibold text-lg">{quantity}</div>
      <button
        className={`outline-none border-0 bg-transparent ${
          quantity === 99 ? "text-gray-300 cursor-default" : "text-orange-500"
        }`}
        onClick={() => handleIncreaseQuantity()}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default ProductQuantity;
