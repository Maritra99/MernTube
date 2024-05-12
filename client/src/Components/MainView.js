import React from "react";
import {
  AvatarComponent,
  DividerComponent,
  InputTextComponent,
} from "./PrimeReactReusable";
import SideBar from "./SideBar";

const MainView = ({ content }) => {
  const src =
    "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg";

  const renderTopBar = () => {
    return (
      <div className="flex justify-content-between align-items-center h-full min-w-screen">
        <div className="logo flex mx-1 px-3 md:px-5 text-2xl md:text-3xl w-2 sm:w-3 text-center">
          {/* <span>
            <AvatarComponent src={src} size="large" />
          </span> */}
          <span className="hidden sm:block text-center w-full">Merntube</span>
        </div>
        <div className="search mx-1 px-1 md:px-4 lg:px-8 w-6">
          <InputTextComponent
            placeholder="Search Video..."
            className="w-full"
          />
        </div>
        <div className="profile mx-1 px-3 md:px-5 w-2 sm:w-3 text-center">
          <AvatarComponent
            src={src}
            size="large"
            shape="circle"
            className="cursor-pointer"
            onClick={() => {
              console.log("clicked");
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="h-5rem bg-primary">{renderTopBar()}</div>
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
