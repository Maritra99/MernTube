import React, { useRef } from "react";
import authUtils from "../Utils/AuthUtils";
import {
  AvatarComponent,
  ButtonComponent,
  InputTextComponent,
  OverlayComponent,
} from "./PrimeReactReusable";
import { useNavigate, useLocation } from "react-router-dom";

const restrictedPathForSearchBoxRender = ["/login", "/sign-up"];

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

const TopBar = () => {
  const profileRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const src =
    "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg";

  return (
    <div className="flex justify-content-between align-items-center h-full min-w-screen">
      <div className="logo flex mx-1 px-3 md:px-5 text-2xl md:text-3xl w-2 sm:w-3 text-center">
        {/* <span>
              <AvatarComponent src={src} size="large" />
            </span> */}
        <span className="hidden sm:block text-center w-full">Merntube</span>
      </div>
      {!restrictedPathForSearchBoxRender.includes(location.pathname) && (
        <div className="search mx-1 px-1 md:px-4 lg:px-8 w-6">
          <InputTextComponent
            placeholder="Search Video..."
            className="w-full"
          />
        </div>
      )}
      {!authUtils.isLoggedIn() && (
        <div className="login-section mx-1 px-3 md:px-5 w-2 sm:w-3 text-center">
          {location.pathname !== "/login" && (
            <ButtonComponent
              label="Login"
              className="text-0 bg-purple-600 mx-1 px-3 py-2 border-round-lg"
              onClick={() => navigate("/login")}
            />
          )}
          {location.pathname !== "/sign-up" && (
            <ButtonComponent
              label="Sign Up"
              className="text-purple-600 mx-1 px-3 py-2 border-round-lg"
              text={true}
              onClick={() => navigate("/sign-up")}
            />
          )}
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

export default TopBar;
