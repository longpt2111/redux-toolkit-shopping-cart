import React from "react";
import { useAppSelector } from "../../app/hooks";
import { selectLoading } from "../../slices/productsSlice";
import "./LoadingComponent.css";

const LoadingComponent: React.FC = () => {
  const isLoading = useAppSelector(selectLoading);
  if (!isLoading) return null;
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
