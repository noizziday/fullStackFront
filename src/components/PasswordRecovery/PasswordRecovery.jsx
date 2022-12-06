import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/authContext";

const PasswordRecovery = () => {
  const { passwordRecovery } = useContext(authContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  console.log(email, code, password, repeatPassword);

  function sendCode() {
    setEmail(localStorage.getItem("email"));
    let passwordRecoveryObj = new FormData();
    passwordRecoveryObj.append("email", email);
    passwordRecoveryObj.append("new_password", password);
    passwordRecoveryObj.append("new_pass_confirm", repeatPassword);
    passwordRecoveryObj.append("code", code);
    passwordRecovery(passwordRecoveryObj, navigate);
    localStorage.removeItem("email");
  }

  return (
    <div>
      <h2>Вам на почту был отправлен код восстановления</h2>
      <input
        onChange={e => setCode(e.target.value)}
        type="text"
        placeholder="Введи код"
      />
      <input
        onChange={e => setPassword(e.target.value)}
        type="password"
        placeholder="Новый пароль"
      />
      <input
        onChange={e => setRepeatPassword(e.target.value)}
        type="password"
        placeholder="Повторите пароль"
      />
      <button onClick={sendCode}>Отправить</button>
    </div>
  );
};

export default PasswordRecovery;
