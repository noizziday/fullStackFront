import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navBlock">
      <div className="navContainer">
        <div className="navElements">
          <div className="navElementsLinks">Главная</div>
          <div className="navElementsLinks">Отели</div>
          <div className="navElementsLinks">Регистрация</div>
          <div className="navElementsLinks">Авторизация</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
