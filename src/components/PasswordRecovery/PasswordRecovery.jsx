import React from "react";

const PasswordRecovery = () => {
  return (
    <div>
      <input type="email" placeholder="Повторите email" />
      <input type="password" placeholder="Новый пароль" />
      <input type="password" placeholder="Повторите пароль" />
      <button>Отправить</button>
    </div>
  );
};

export default PasswordRecovery;
