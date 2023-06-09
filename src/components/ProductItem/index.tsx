import React from "react";
import { Product } from "../../slices/productsSlice";

interface IPropsProductItem extends Product {
  onDetailsClick(): void;
}

const ProductItem: React.FC<IPropsProductItem> = ({
  imageUrl,
  productName,
  description,
  price,
  onDetailsClick,
}) => {
  return (
    <div className="flex h-44 gap-3 px-4 py-4 rounded-lg bg-white shadow-lg">
      <div
        className="w-2/6 h-100 mr-3 rounded-lg overflow-hidden"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "80%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="w-4/6 flex flex-col justify-between">
        <div>
          <h4
            className="text-xl cursor-pointer hover:text-blue-500 font-semibold"
            onClick={onDetailsClick}
          >
            {productName}
          </h4>
          <p className="text-md font-light text-gray-700">{description}</p>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold">${price}</h3>
          <button
            className="outline-none border-0 bg-transparent text-blue-500 hover:text-blue-400"
            onClick={onDetailsClick}
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
