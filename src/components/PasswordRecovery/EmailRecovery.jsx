import React from "react";
import { useNavigate } from "react-router-dom";

const EmailRecovery = () => {
  const navigate = useNavigate();
  return (
    <div>
      <input type="email" placeholder="Введите свой e-mail" />
      <button onClick={() => navigate("/recovery/password")}>Отправить</button>
    </div>
  );
};

export default EmailRecovery;
