import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import CheckoutPage from "../pages/CheckoutPage";
import MaintenancePage from "../pages/MaintenancePage";
import ProductPage from "../pages/ProductPage";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/products" />} />
      <Route path="/home" element={<MaintenancePage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/reviews" element={<MaintenancePage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  );
};

export default AppRoutes;
