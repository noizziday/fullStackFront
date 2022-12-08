import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Form, useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/authContext";
import "../../styles/Recovery.css";

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
    <div className="emailBlock">
      <div className="emailDiv">
        <div className="emailInnerDiv">
          <h2 className="emailInnerDivTitle">Ваш адрес электронной почты</h2>
          <input
            type="email"
            placeholder="Введите свой адрес электронной почты"
            onChange={e => setEmail(e.target.value)}
            className="emailRecoverInp"
          />
          <button onClick={sendEmail} className="emailNextBtn">
            Далее
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailRecovery;
