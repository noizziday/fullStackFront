import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Form, useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/authContext";

const EmailRecovery = () => {
  const { emailRecovery } = useContext(authContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  function sendEmail() {
    let emailForm = new FormData();
    emailForm.append("email", email);
    emailRecovery(emailForm, navigate);
    localStorage.setItem("email", email);
  }
  return (
    <div>
      <input
        type="email"
        placeholder="Введите свой e-mail"
        onChange={e => setEmail(e.target.value)}
      />
      <button onClick={sendEmail}>Отправить</button>
    </div>
  );
};

export default EmailRecovery;
