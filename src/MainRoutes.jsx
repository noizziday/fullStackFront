import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddPage from "./pages/AddPage";
import EditPage from "./pages/EditPage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import HotelDetailsPage from "./pages/HotelDetailsPage";
import EmailRecovery from "./components/PasswordRecovery/EmailRecovery";
import PasswordRecovery from "./components/PasswordRecovery/PasswordRecovery";
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/edit" element={<EditPage />} />
      <Route path="/add" element={<AddPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/details" element={<HotelDetailsPage />} />
      <Route path="/recovery/email" element={<EmailRecovery />} />
      <Route path="/recovery/password" element={<PasswordRecovery />} />
    </Routes>
  );
};

export default MainRoutes;
