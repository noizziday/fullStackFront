import React, { useState } from "react";
import "../styles/Navbar.css";
import { useNavigate } from "react-router-dom";
import "../styles/AuthModal.css";

const Navbar = () => {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const [inputs, setInputs] = useState(true);
  return (
    <div className="navBlock">
      <div className="navContainer">
        <div className="navElements">
          <div className="navElementsLinks" onClick={() => navigate("/")}>
            Главная
          </div>
          <div className="navElementsLinks">Отели</div>
          <div
            className="navElementsLinks modal-btn"
            htmlFor="modal-toggle"
            onClick={() => setModal(!modal)}>
            Регистрация
          </div>
          <div className="navElementsLinks">Авторизация</div>
        </div>
      </div>
      {modal ? (
        <div className="modalBlock">
          {inputs ? (
            // Это бло с входом в аккаунт
            <div className="modalContent">
              <div className="changeInputs">
                <div
                  className="changeToLogIn"
                  style={{
                    backgroundColor: "#e4cfa9",
                    color: "#002939",
                  }}
                  onClick={() => setInputs(true)}>
                  Вход
                </div>
                <div className="changeLine"></div>
                <div
                  className="changeToSignUp"
                  onClick={() => setInputs(false)}>
                  Регистрация
                </div>
              </div>
              <div className="authModule">
                <input type="email" className="loginInp" placeholder="Email" />
                <input
                  type="password"
                  className="passwordInp"
                  placeholder="Password"
                />
                <button>Войти</button>
              </div>
            </div>
          ) : (
            // Это блок с регистрацией
            <div className="modalContent ">
              <div className="changeInputs">
                <div className="changeToLogIn" onClick={() => setInputs(true)}>
                  Вход
                </div>
                <div className="changeLine"></div>
                <div
                  className="changeToSignUp"
                  style={{ backgroundColor: "#e4cfa9", color: "#002939" }}
                  onClick={() => setInputs(false)}>
                  Регистрация
                </div>
              </div>
              <div className="regModule">
                <input
                  type="email"
                  className="loginInp"
                  placeholder="Set your email"
                />
                <input
                  type="password"
                  className="passwordInp"
                  placeholder="Set password"
                />
                <input
                  type="password"
                  className="secondPasswordInp"
                  placeholder="Repeat your password"
                />
                <button>Зарегистрироваться</button>
              </div>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
