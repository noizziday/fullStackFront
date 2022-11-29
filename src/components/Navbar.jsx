import React from "react";
import "../styles/Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navBlock">
      <div className="navContainer">
        <div className="navElements">
          <div className="navElementsLinks" onClick={() => navigate("/")}>
            Главная
          </div>
          <div className="navElementsLinks">Отели</div>
          <div className="navElementsLinks">Регистрация</div>
          <div className="navElementsLinks">Авторизация</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
