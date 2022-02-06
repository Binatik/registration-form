// =================================================
import React from "react";
// =================================================

// Component
import "./registration.css";

function Registration() {
  return (
    <React.Fragment>
      <h2 className="registration registration__title">Регистрация</h2>
      <div className="registration registration__account">
        <span className="registration__description">Уже есть аккаунт?</span>
        <button
          onClick={() => alert("К сожалению данный сервис больше не поддерживается. Спасибо, что вы были с нами!")}
          className="button registration__btn"
          type="button"
        >
          Войти
        </button>
      </div>
    </React.Fragment>
  );
}

export default Registration;
