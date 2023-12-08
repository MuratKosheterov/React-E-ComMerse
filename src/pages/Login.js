import React from "react";
import { useState } from "react";
import { useRef } from "react";
import http from "../components/LogData";

function Login({ setToken }) {
  const [hasError, setHasError] = useState(false);
  const emailInput = useRef(null);
  const passwordInput = useRef(null);

  function onFormSubmit(e) {
    e.preventDefault();
    http.post("/login", {
        email: emailInput.current.value,
        password: passwordInput.current.value,
      })
      .then((res) => {
        setToken(res.data.token);
        console.log(res.data.token);
        console.log(res);
        window.localStorage.setItem("token", res.data.token);
      })
      .catch(() => {
        setHasError(true);
      });
  }

  return (
    <div className=" py-5 mt-5">
      <form
        onSubmit={onFormSubmit}
        className=" col-4  d-flex  flex-column  shadow  bg-dark   p-5  mx-auto "
      >
        <div className=" ">
          <h1 className=" text-light ">Войти</h1>
          {hasError ? (
            <div className="alert alert-primary" role="alert">
              Your login or password is wrong!!!
            </div>
          ) : (
            <></>
          )}
          <label htmlFor="exampleInputEmail1" className="form-label text-light">
            Электронный адресс
          </label>
          <input
            ref={emailInput}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleInputPassword1"
            className="form-label text-light"
          >
            Пароль
          </label>
          <input
            ref={passwordInput}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Отправить
        </button>
        <p className="text-light mt-3 border-bottom  cursore-pointer">
          Создать новый аккаунт ?<i className="bi bi-person-plus ms-3"></i>
        </p>
      </form>
    </div>
  );
}

export default Login;