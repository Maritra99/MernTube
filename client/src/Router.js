import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Views/HomePage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default Router;
