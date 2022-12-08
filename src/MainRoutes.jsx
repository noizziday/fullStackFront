import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HotelDetails from "./components/hotels/Details/HotelDetails";
import HotelFavorites from "./components/hotels/HotelFavorites/HotelFavorites";
import AddHotel from "./components/hotels/AddHotel/AddHotel";
import HotelsList from "./components/hotels/HotelsList/HotelsList";
import UpdateHotel from "./components/hotels/UpdateHotel/UpdateHotel";
import PayForm from "./components/PayForm";
import AddRoom from "./components/hotels/AddRoom/AddRoom";
import EmailRecovery from "./components/PasswordRecovery/EmailRecovery";
import PasswordRecovery from "./components/PasswordRecovery/PasswordRecovery";
import LoginPage from "./pages/LoginPage";
import Reviews from "./components/Reviews";


const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/details/:id" element={<HotelDetails />} />
      <Route path="/favorites" element={<HotelFavorites />} />
      <Route path="/pay" element={<PayForm />} />
      <Route path="/hotel/add" element={<AddHotel />} />
      <Route path="/hotel/:id" element={<Reviews />} />

      <Route path="/hotels" element={<HotelsList />} />
      <Route path="/edit/:id" element={<UpdateHotel />} />
      <Route path="/hotel/add/addroom/:id" element={<AddRoom />} />
      <Route path="/recovery/email/" element={<EmailRecovery />} />
      <Route path="/recovery/email/password" element={<PasswordRecovery />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default MainRoutes;
