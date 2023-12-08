import React from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../contexts/CartProvider";

function Navbar() {
  const { itemAmount } = useContext(CartContext);
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top bg-light shadow ">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <p className=" text-warning">W-Fashion</p>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto align-items-center  mb-2 mb-lg-0 fs-5">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Главная
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/shop">
                  Шоппинг
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/gallery">
                  Галерея
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Контакты
                </NavLink>
              </li>
            </ul>
            <div className="navbar__icons d-flex justify-content-center  align-items-center">
              <div className="navbar-search">
                <i className="bi bi-search mx-2 fs-4 "></i>
              </div>
              <div className="navbar-cart">
                <button
                  className="btn border-0  d-flex "
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasScrolling"
                  aria-controls="offcanvasScrolling"
                >
                  <i className="bi bi-cart3 mx-2 fs-4">
                    <sup className=" text-decoration-none ">{itemAmount}</sup>
                  </i>
                </button>
              </div>
              <Link to="login" className=" text-dark ">
                <i className="bi bi-box-arrow-in-right fs-4 "></i>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
