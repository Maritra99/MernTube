import React from "react";
import {
  ButtonComponent,
  CardComponent,
  InputTextComponent,
} from "../Components/PrimeReactReusable";
import TopBar from "../Components/TopBar";
import { UserIcon } from "../Static/IconList";

const renderCardBody = () => {
  return (
    <div className="flex flex-column p-4 w-12">
      <div className="flex w-full justify-content-center">
        <UserIcon className="text-purple-600 text-4xl sm:text-5xl md:text-6xl" />
      </div>
      <p className="text-center font-bold text-3xl sm:text-4xl md:text-5xl mt-1 mb-5 text-purple-600">
        Welcome Back
      </p>
      <div className="flex flex-column justify-content-center align-items-center">
        <InputTextComponent
          placeholder="Username or Email Id"
          className="w-11 p-3 mx-3 my-2 border-none surface-300 border-round-md"
        />
        <InputTextComponent
          placeholder="Password"
          className="w-11 p-3 mx-3 my-2 border-none surface-300 border-round-md"
        />
      </div>
      <div className="flex justify-content-between align-items-center my-3 px-3">
        <div>
          <div className="text-center underline text-color-secondary my-1">
            Forgot your password?
          </div>
        </div>
        <div className="flex flex-column justify-content-center align-items-center">
          <ButtonComponent
            label="Sign In"
            // onClick={}
            icon="pi pi-sign-in"
            // loading={}
            className="text-0 bg-purple-600 border-round-lg"
          />
        </div>
      </div>
    </div>
  );
};

const Login = () => {
  return (
    <div className="w-full h-screen">
      <div className="h-5rem">
        <TopBar />
      </div>
      <CardComponent
        cardContent={renderCardBody()}
        className="surface-card login-card w-11 sm:w-10 md:w-7 lg:w-5 mx-auto m-8 border-round-md"
        style={{
          padding: 0,
          boxShadow:
            "rgba(111, 44, 145, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
          minHeight: "50%",
        }}
        unstyled
      />
    </div>
  );
};

export default Login;
