import React from "react";
import PageFooter from "../ui/Footer";
import { Outlet } from "react-router-dom";
import PageHeader from "../ui/Header";


const MainLayout = () => {
  return (
    <div>
      <PageHeader/>
      <div>
        <Outlet />
      </div>
      <PageFooter />
    </div>
  );
};

export default MainLayout;
