import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Views/HomePage";
import Login from "./Views/Login";
import Registration from "./Views/Registration";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<Registration />} />
    </Routes>
  );
};

export default Router;
