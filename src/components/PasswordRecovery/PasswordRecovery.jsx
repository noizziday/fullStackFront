import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/authContext";
import "../../styles/Recovery.css";

const PasswordRecovery = () => {
  const { passwordRecovery } = useContext(authContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  console.log(email, code, password, repeatPassword);
  useEffect(() => {
    setEmail(localStorage.getItem("email"));
  }, []);
  function sendCode() {
    let passwordRecoveryObj = new FormData();
    passwordRecoveryObj.append("email", email);
    passwordRecoveryObj.append("new_password", password);
    passwordRecoveryObj.append("new_pass_confirm", repeatPassword);
    passwordRecoveryObj.append("code", code);
    passwordRecovery(passwordRecoveryObj, navigate);
    localStorage.removeItem("email");
  }

  return (
    <div className="emailBlock">
      <div className="passwordRecoveryDiv">
        <div className="passwordRecoveryInnerDiv">
          <h2 className="passwordInnerTitle">
            На адрес <b>{email}</b> был отправлен код восстановления
          </h2>
          <div className="passwordInnerInputs">
            <input
              onChange={e => setCode(e.target.value)}
              type="text"
              placeholder="Введи код"
              className="code"
            />
            <input
              onChange={e => setPassword(e.target.value)}
              type="password"
              placeholder="Новый пароль"
              className="password"
            />
            <input
              onChange={e => setRepeatPassword(e.target.value)}
              type="password"
              placeholder="Повторите пароль"
              className="repeatPassword"
            />
          </div>
          <button onClick={sendCode} className="passwordSendBtn">
            Отправить
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordRecovery;
