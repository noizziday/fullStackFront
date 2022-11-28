import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/edit" element={<EditPage />} />
      <Route path="/add" element={<AddPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default MainRoutes;
