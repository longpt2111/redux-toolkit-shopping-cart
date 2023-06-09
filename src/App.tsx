import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import LoadingComponent from "./components/LoadingComponent";
import AppRoutes from "./router";
import { useAppDispatch } from "./app/hooks";
import { getProductsFetch } from "./slices/productsSlice";

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProductsFetch());
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      <AppRoutes />
      <Toaster containerStyle={{ bottom: "2rem", right: "2rem" }} />
      <LoadingComponent />
    </div>
  );
};

export default App;
