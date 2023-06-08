import React from "react";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import LoadingComponent from "./components/LoadingComponent";
import AppRoutes from "./router";

const App: React.FC = () => {
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
