import React from "react";
import CommingSoonImg from "../../assets/images/comming-soon.png";

const MaintenancePage: React.FC = () => {
  return (
    <div className="flex w-full items-center justify-center pt-12 mt-12">
      <img className="w-96" src={CommingSoonImg} alt="" />
    </div>
  );
};

export default MaintenancePage;
