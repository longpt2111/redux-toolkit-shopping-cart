import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import LoadingComponent from "./components/LoadingComponent";
import AppRoutes from "./router";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { getProductsFetch, selectProducts } from "./slices/productsSlice";
import { setSelectedProduct } from "./slices/selectedProductSlice";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);

  useEffect(() => {
    dispatch(getProductsFetch());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setSelectedProduct(products[0]));
  }, [dispatch, products]);

  return (
    <div className="App">
      <Navbar />
      <AppRoutes />
      <Toaster containerStyle={{ bottom: "2rem", left: "2rem" }} />
      <LoadingComponent />
    </div>
  );
};

export default App;
