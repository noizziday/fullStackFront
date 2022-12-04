import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HotelsList from "./components/hotels/HotelsList/HotelsList";
import HotelDetails from "./components/hotels/Details/HotelDetails";
import HotelFavorites from "./components/hotels/HotelFavorites/HotelFavorites";
import AddHotel from "./components/hotels/AddHotel/AddHotel";
// import RegistrationPage from "./pages/RegistrationPage";
// import LoginPage from "./pages/LoginPage";
import PayForm from "./components/PayForm";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/login" element={<LoginPage />} /> */}
      <Route path="/details" element={<HotelDetails />} />
      <Route path="/hotels" element={<HotelsList />} />
      <Route path="/favorites" element={<HotelFavorites />} />
      <Route path="/pay" element={<PayForm />} />
      <Route path="/hotel/add" element={<AddHotel />} />
    </Routes>
  );
};

export default MainRoutes;
