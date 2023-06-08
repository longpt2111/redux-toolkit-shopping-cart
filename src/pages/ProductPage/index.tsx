import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const ProductPage: React.FC = () => {
  return (
    <div className="h-[800px] pt-5 pb-5">
      <div className="container mx-auto h-full">
        <div className="grid grid-cols-12 h-full gap-5">
          <div className="col-span-7 h-full">
            <div className="flex flex-col gap-y-3 h-full p-8 shadow-lg bg-white rounded-lg">
              <div className="h-3/4">
                <div className="relative h-full">
                  <img
                    src=""
                    alt=""
                    className="absolute w-full h-full top-0 left-0"
                  />
                </div>
              </div>
              <div className="h-1/4 grid grid-cols-12">
                <div className="col-span-12 mb-4">
                  <div className="grid grid-cols-12 w-full">
                    <div className="col-span-10">
                      <h2 className="text-4xl font-normal mb-2">
                        True Skin Vitamin C
                      </h2>
                      <p className="text-md font-light text-gray-700">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Assumenda omnis laborum.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-12">
                  <div className="flex items-center justify-between mt-5">
                    <div className="w-1/6">
                      <div className="flex items-center justify-between bg-gray-200 rounded-lg px-5 py-1">
                        <button className="outline-none border-0 bg-transparent text-gray-300">
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <div className="text-black font-semibold text-lg">
                          1
                        </div>
                        <button className="outline-none border-0 bg-transparent text-gray-300">
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                      </div>
                    </div>
                    <div className="text-right flex items-center gap-8">
                      <p className="mb-0 font-bold text-3xl">$23.00</p>
                      <div className="flex items-center justify-center duration-100 shadow-md gap-4 px-6 py-3 text-lg rounded-lg bg-blue-500 text-white cursor-pointer">
                        <FontAwesomeIcon icon={faShoppingCart} /> Add to cart
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-5 h-full overflow-auto rounded-lg">
            <div className="grid grids-col-12 gap-3 h-auto">
              <div className="flex h-44 gap-3 px-4 py-4 rounded-lg bg-white shadow-lg">
                <div className="w-2/6 h-100 mr-3 rounded-lg overflow-hidden">
                  <img src="" alt="" />
                </div>
                <div className="w-4/6 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl cursor-pointer hover:text-blue-500 font-semibold">
                      Product Name
                    </h4>
                    <p className="text-md font-light text-gray-700">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-semibold">12.45</h3>
                    <button className="outline-none border-0 bg-transparent text-blue-500">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
