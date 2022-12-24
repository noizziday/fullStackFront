import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddPage from "./pages/AddPage";
import EditPage from "./pages/EditPage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import FootbalPage from "./pages/FootbalPage";
import BassketballCourt from "./pages/BassketballCourt";
import TennisCourt from "./pages/TennisCourt";
import DanceHall from "./pages/DanceHall";
import KonyaHall from "./pages/KonyaHall";
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/edit" element={<EditPage />} />
      <Route path="/add" element={<AddPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/football" element={<FootbalPage />} />
      <Route path="/basketball" element={<BassketballCourt />} />
      <Route path="/tennis" element={<TennisCourt />} />
      <Route path="/dancehall" element={<DanceHall />} />
      <Route path="/konyahall" element={<KonyaHall />} />
    </Routes>
  );
};

export default MainRoutes;
