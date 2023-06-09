import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";
import {
  Product,
  getProductsFetch,
  selectProducts,
} from "../../slices/productsSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import ProductItem from "../../components/ProductItem";
import {
  selectSelectedProduct,
  setSelectedProduct,
} from "../../slices/selectedProductSlice";

const ProductPage: React.FC = () => {
  const products = useAppSelector(selectProducts);
  const selectedProduct = useAppSelector(selectSelectedProduct);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProductsFetch());
  }, [dispatch]);

  const handleDetailsClick = (productDetails: Product) => {
    dispatch(setSelectedProduct(productDetails));
  };

  return (
    <div className="h-[800px] pt-5 pb-5">
      <div className="container mx-auto h-full">
        <div className="grid grid-cols-12 h-full gap-5">
          <div className="col-span-7 h-full">
            <div className="flex flex-col gap-y-3 h-full p-8 shadow-lg bg-white rounded-lg">
              <div className="h-3/4">
                <div className="relative h-full">
                  <img
                    src={
                      selectedProduct?.imageUrl
                        ? selectedProduct?.imageUrl
                        : products[0]?.imageUrl
                    }
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
                        {selectedProduct?.productName
                          ? selectedProduct?.productName
                          : products[0]?.productName}
                      </h2>
                      <p className="text-md font-light text-gray-700">
                        {selectedProduct?.description
                          ? selectedProduct?.description
                          : products[0]?.description}
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
                      <p className="mb-0 font-bold text-3xl">
                        $
                        {selectedProduct?.price
                          ? selectedProduct?.price
                          : products[0]?.price}
                      </p>
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
              {products.map(
                ({ productId, price, productName, description, imageUrl }) => (
                  <ProductItem
                    key={productId}
                    price={price}
                    productName={productName}
                    description={description}
                    imageUrl={imageUrl}
                    onDetailsClick={() =>
                      handleDetailsClick({
                        productId,
                        price,
                        productName,
                        description,
                        imageUrl,
                      })
                    }
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
