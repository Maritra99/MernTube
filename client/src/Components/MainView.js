import React, { useRef } from "react";
import {
  AvatarComponent,
  ButtonComponent,
  DividerComponent,
  InputTextComponent,
  OverlayComponent,
} from "./PrimeReactReusable";
import SideBar from "./SideBar";
import authUtils from "../Utils/AuthUtils";

const MainView = ({ content }) => {
  const profileRef = useRef(null);
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
        {!authUtils.isLoggedIn() && (
          <div className="login-section mx-1 px-3 md:px-5 w-2 sm:w-3 text-center">
            <ButtonComponent
              label="Login"
              className="text-0 bg-purple-600 mx-1 px-3 py-2 border-round-lg"
            />
            <ButtonComponent
              label="Sign Up"
              className="text-purple-600 bg-purple-100 mx-1 px-3 py-2 border-round-lg"
            />
          </div>
        )}
        {authUtils.isLoggedIn() && (
          <div className="profile mx-1 px-3 md:px-5 w-2 sm:w-3 text-center">
            <AvatarComponent
              src={src}
              size="large"
              shape="circle"
              className="cursor-pointer"
              onClick={(e) => profileRef.current.toggle(e)}
            />
          </div>
        )}
        <OverlayComponent
          reference={profileRef}
          content={renderProfileDropDown()}
        />
      </div>
    );
  };

  const renderProfileDropDown = () => {
    return (
      <>
        <div className="my-2 px-2 py-2 cursor-pointer hover:surface-200 border-round-xl">
          Account & Security
        </div>
        <div className="my-2 px-2 py-2 cursor-pointer hover:surface-200 border-round-xl">
          Settings
        </div>
        <div className="my-2 px-2 py-2 cursor-pointer hover:surface-200 border-round-xl">
          Help & Support
        </div>
        <ButtonComponent
          label="Logout"
          className="w-full p-2"
          severity="danger"
          icon="pi pi-sign-out"
        />
      </>
    );
  };

  return (
    <>
      <div className="h-5rem">{renderTopBar()}</div>
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
