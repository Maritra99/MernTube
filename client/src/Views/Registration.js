import React, { useState } from "react";
import {
  ButtonComponent,
  CardComponent,
  InputTextComponent,
  PasswordComponent,
} from "../Components/PrimeReactReusable";
import TopBar from "../Components/TopBar";
import ImageUploadContainer from "../Components/ImageUploadContainer";
import "../Styles/Registration.css";

const initialState = {
  fullName: "",
  emailId: "",
  password: "",
  image: null,
};

const Registration = () => {
  const [regFormData, setRegFormData] = useState(initialState);

  const handleRegFormData = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setRegFormData({
      ...regFormData,
      [name]: value,
    });
  };

  const renderCardBody = () => {
    return (
      <div className="flex flex-column p-4 w-12">
        <p className="text-center font-bold text-5xl my-2 text-purple-600">
          Register Yourself
        </p>
        <div>
          <ImageUploadContainer
            regFormData={regFormData}
            setRegFormData={setRegFormData}
          />
        </div>
        <div className="flex flex-column justify-content-center align-items-center">
          <InputTextComponent
            placeholder="Full Name"
            className="w-full p-3 m-2 border-none surface-300 border-round-md"
            name="fullName"
            value={regFormData.fullName}
            onChange={handleRegFormData}
          />
          <InputTextComponent
            placeholder="Email Id"
            className="w-full p-3 m-2 border-none surface-300 border-round-md"
            name="emailId"
            value={regFormData.emailId}
            onChange={handleRegFormData}
          />
          <PasswordComponent
            placeholder="Password"
            className="password-div w-full"
            inputClassName="w-full p-3 my-2 border-none surface-300 border-round-md"
            name="password"
            value={regFormData.password}
            onChange={handleRegFormData}
            toggleMask
          />
        </div>
        <div className="flex justify-content-center align-items-center my-3 px-3">
          <div className="flex flex-column justify-content-center align-items-center">
            <ButtonComponent
              label="Sign In"
              onClick={() => console.log(regFormData)}
              icon="pi pi-sign-in"
              // loading={}
              className="text-0 bg-purple-600 border-round-lg"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full h-screen">
      <div className="h-5rem">
        <TopBar />
      </div>
      <CardComponent
        cardContent={renderCardBody()}
        className="surface-card login-card w-12 sm:w-10 md:w-7 lg:w-4 mx-auto m-8 border-round-md"
        style={{
          padding: 0,
          boxShadow:
            "rgba(111, 44, 145, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
        }}
        unstyled
      />
    </div>
  );
};

export default Registration;
