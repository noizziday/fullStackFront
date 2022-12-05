import React, { useState, useContext, useEffect } from "react";
import "../styles/Navbar.css";
import { useNavigate } from "react-router-dom";
import "../styles/AuthModal.css";
import imag from "../media/icons8-close-48.png";
import { authContext, useAuth } from "../authContext";
import "../styles/DropDown.css";
const Navbar = () => {
  const { handleRegister, setError, handleLogin } = useContext(authContext);
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const [inputs, setInputs] = useState(true);
  const [regLogInpValue, setRegLogInpValue] = useState("");
  const [regPasswordInpValue, setRegPasswordInpValue] = useState("");
  const [regEmailInpValue, setRegEmailInpValue] = useState("");
  const [regSecondPasswordInpValue, setRegSecondPasswordInpValue] =
    useState("");
  const [logInpValue, setLogInpValue] = useState("");
  const [passwordInpValue, setPasswordInpValue] = useState("");

  function createUser() {
    if (
      !regEmailInpValue.trim() ||
      !regPasswordInpValue.trim() ||
      !regSecondPasswordInpValue.trim() ||
      !regLogInpValue.trim()
    ) {
      alert("Some inputs are empty!");
      return;
    }
    let formData = new FormData();
    formData.append("username", regLogInpValue);
    formData.append("email", regEmailInpValue);
    formData.append("password", regPasswordInpValue);
    formData.append("password_confirm", regSecondPasswordInpValue);
    handleRegister(formData, navigate);
    navigate("/");
    alert("Успешная регистрация!");
  }

  function loginUser() {
    if (!logInpValue.trim() || !passwordInpValue.trim()) {
      alert("Some inputs are empty!");
      return;
    }
    let formData = new FormData();
    formData.append("email", logInpValue);
    formData.append("password", passwordInpValue);
    handleLogin(formData, logInpValue, navigate);
    setModal(false);
  }

  const logout = () => {
    localStorage.removeItem("tokens");
    localStorage.removeItem("email");
    alert("Вы успешно вышли из аккаунта!");
    navigate("/");
  };

  useEffect(() => {
    setError(false);
  }, []);

  const [dropDown, setDropDown] = useState(false);

  return (
    <div className="navBlock">
      {localStorage.email ? (
        <div className="navContainer">
          <div className="navElements">
            <div className="navElementsLinks" onClick={() => navigate("/")}>
              Главная
            </div>
            <div className="navElementsLinks">Отели</div>
            <div className="navElementsLinks modal-btn" htmlFor="modal-toggle">
              Зарегистрировать объект
            </div>
            <div className="profileDiv">
              <div className="profileDropDown">
                <div
                  className="profileIcon"
                  onClick={() => setDropDown(!dropDown)}>
                  P
                </div>
                <div
                  className={
                    dropDown ? "dropDownMenu active" : "dropDownMenu inactive"
                  }>
                  <div
                    className="dropDownMenuBtn"
                    onClick={() => setDropDown(!dropDown)}>
                    Профиль
                  </div>
                  <div
                    className="dropDownMenuBtn"
                    onClick={() => setDropDown(!dropDown)}>
                    Мой аккаунт
                  </div>
                  <div
                    className="dropDownMenuBtn"
                    onClick={() => {
                      setDropDown(!dropDown);
                      logout();
                    }}>
                    Выйти из аккаунта
                  </div>
                </div>
              </div>
              <div className="profileName">Profile Name</div>
            </div>
          </div>{" "}
        </div>
      ) : (
        <div className="navContainer">
          <div className="navElements">
            <div className="navElementsLinks" onClick={() => navigate("/")}>
              Главная
            </div>
            <div className="navElementsLinks">Отели</div>
            <div
              className="navElementsLinks modal-btn"
              htmlFor="modal-toggle"
              onClick={() => {
                setModal(!modal);
                setInputs(false);
              }}>
              Регистрация
            </div>
            <div
              className="navElementsLinks"
              onClick={() => {
                setModal(!modal);
                setInputs(true);
              }}>
              Авторизация
            </div>
          </div>
        </div>
      )}

      <div
        style={
          modal
            ? {
                position: "fixed",
                height: "5000px",
                backgroundColor: "black",
                opacity: "0.5",
                width: "100%",
                right: "0",
                transition: "0.5s",
              }
            : {
                position: "fixed",
                height: "5000px",
                backgroundColor: "black",
                opacity: "0.1",
                width: "100%",
                right: "5000px",
                transition: "0.5s",
              }
        }></div>
      <div className={modal ? "modalBlock active" : "modalBlock inactive"}>
        <div
          className="closeBtn"
          onClick={() => {
            setModal(false);
            setLogInpValue("");
            setPasswordInpValue("");
            setRegEmailInpValue("");
            setRegLogInpValue("");
            setRegPasswordInpValue("");
            setRegPasswordInpValue("");
          }}>
          <img src={imag} alt="" width="20px" height="20px" />
        </div>
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
                onClick={() => {
                  setRegEmailInpValue("");
                  setRegLogInpValue("");
                  setRegPasswordInpValue("");
                  setRegPasswordInpValue("");
                  setInputs(true);
                }}>
                Вход
              </div>
              <div className="changeLine"></div>
              <div
                className="changeToSignUp"
                onClick={() => {
                  setLogInpValue("");
                  setPasswordInpValue("");
                  setInputs(false);
                }}>
                Регистрация
              </div>
            </div>
            <div className="authModule">
              <input
                type="email"
                className="loginInp"
                placeholder="Email"
                value={logInpValue}
                onChange={e => {
                  setLogInpValue(e.target.value);
                }}
              />
              <input
                value={passwordInpValue}
                type="password"
                className="passwordInp"
                placeholder="Password"
                onChange={e => setPasswordInpValue(e.target.value)}
              />
              <div className="loginBtn" onClick={loginUser}>
                Войти
              </div>
            </div>
          </div>
        ) : (
          // Это блок с регистрацией
          <div className="modalContent ">
            <div className="changeInputs">
              <div
                className="changeToLogIn"
                onClick={() => {
                  setRegEmailInpValue("");
                  setRegLogInpValue("");
                  setRegPasswordInpValue("");
                  setRegPasswordInpValue("");
                  setInputs(true);
                }}>
                Вход
              </div>
              <div className="changeLine"></div>
              <div
                className="changeToSignUp"
                style={{ backgroundColor: "#e4cfa9", color: "#002939" }}
                onClick={() => {
                  setLogInpValue("");
                  setPasswordInpValue("");
                  setInputs(false);
                }}>
                Регистрация
              </div>
            </div>
            <div className="regModule">
              <input
                type="email"
                className="loginInp"
                placeholder="Set your email"
                value={regEmailInpValue}
                onChange={e => {
                  setRegEmailInpValue(e.target.value);
                }}
              />
              <input
                type="text"
                value={regLogInpValue}
                className="usernameInp"
                placeholder="Set your username"
                onChange={e => setRegLogInpValue(e.target.value)}
              />
              <input
                type="password"
                value={regPasswordInpValue}
                className="passwordInp"
                placeholder="Set password"
                onChange={e => setRegPasswordInpValue(e.target.value)}
              />
              <input
                type="password"
                value={regSecondPasswordInpValue}
                className="secondPasswordInp"
                placeholder="Repeat your password"
                onChange={e => setRegSecondPasswordInpValue(e.target.value)}
              />
              <div className="regBtn" onClick={createUser}>
                Зарегистрироваться
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
