import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import ProductItem from "../../components/ProductItem";
import ProductQuantity from "../../components/ProductQuantity";
import { Product, selectProducts } from "../../slices/productsSlice";
import {
  decreaseProductsQuantity,
  increaseProductsQuantity,
  resetProductsQuantity,
  selectQuantity,
  selectSelectedProduct,
  setSelectedProduct,
} from "../../slices/selectedProductSlice";
import {
  addProductToCart,
  increaseCartProduct,
  selectCartProducts,
} from "../../slices/cartProductsSlice";
import { toast } from "react-hot-toast";

const ProductPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);
  const selectedProduct = useAppSelector(selectSelectedProduct);
  const quantity = useAppSelector(selectQuantity);
  const cartProducts = useAppSelector(selectCartProducts);

  const handleDetailsClick = (productDetails: Product) => {
    dispatch(setSelectedProduct(productDetails));
    dispatch(resetProductsQuantity());
  };

  const handleDecreaseQuantity = () => {
    dispatch(decreaseProductsQuantity());
  };

  const handleIncreaseQuantity = () => {
    dispatch(increaseProductsQuantity());
  };

  const handleAddProductsToCart = (selectedProduct: Product) => {
    if (
      cartProducts.find(
        ({ productId }) => selectedProduct.productId === productId
      )
    ) {
      dispatch(
        increaseCartProduct({
          id: selectedProduct.productId,
          quantity: selectedProduct.quantity,
        })
      );
    } else {
      dispatch(addProductToCart(selectedProduct));
    }
    dispatch(resetProductsQuantity());
    toast("Added Successfully!!", {
      duration: 3000,
      position: "bottom-left",
      icon: "👏",
      className:
        "flex items-center px-4 py-2 bg-[#10B981] text-white rounded-lg shadow-md",
    });
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
                    src={selectedProduct?.imageUrl}
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
                        {selectedProduct?.productName}
                      </h2>
                      <p className="text-md font-light text-gray-700">
                        {selectedProduct?.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-12">
                  <div className="flex items-center justify-between mt-5">
                    <div className="w-1/6">
                      <ProductQuantity
                        quantity={quantity}
                        handleDecreaseQuantity={handleDecreaseQuantity}
                        handleIncreaseQuantity={handleIncreaseQuantity}
                      />
                    </div>
                    <div className="text-right flex items-center gap-8">
                      <p className="mb-0 font-bold text-3xl">
                        $
                        {(
                          (selectedProduct?.price as number) * quantity
                        ).toFixed(2)}
                      </p>
                      <div
                        className="flex items-center justify-center duration-100 shadow-md gap-4 px-6 py-3 text-lg rounded-lg bg-blue-500 text-white cursor-pointer"
                        onClick={() =>
                          handleAddProductsToCart({
                            quantity,
                            ...selectedProduct,
                          })
                        }
                      >
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
