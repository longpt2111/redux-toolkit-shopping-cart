import React from "react";
import { useAppSelector } from "../../app/hooks";
import { selectLoading } from "../../slices/productsSlice";
import "./LoadingComponent.css";
import { selectPurchaseLoading } from "../../slices/cartProductsSlice";

const LoadingComponent: React.FC = () => {
  const isProductsLoading = useAppSelector(selectLoading);
  const isPurchaseLoading = useAppSelector(selectPurchaseLoading);
  if (!isProductsLoading && !isPurchaseLoading) return null;
  return (
    <div className="fixed inset-0 wrapper-loading z-50 flex items-center justify-center">
      <div className="lds-roller">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default LoadingComponent;
