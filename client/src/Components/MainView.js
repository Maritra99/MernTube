import React from "react";
import { DividerComponent } from "./PrimeReactReusable";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

const MainView = ({ content }) => {
  return (
    <>
      <div className="h-5rem">{<TopBar />}</div>
      <div className="flex flex-column md:flex-row mt-3">
        <div className="block md:hidden w-12">Responsive Navigation</div>
        <div className="hidden md:block md:w-3 lg:w-2">{<SideBar />}</div>
        <DividerComponent
          type="solid"
          layout="vertical"
          className="hidden md:block"
        />
        <div className="w-12 md:w-8 lg:w-9">{content}</div>
      </div>
    </>
  );
};

export default MainView;
