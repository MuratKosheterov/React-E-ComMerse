import React from "react";
import { useContext } from "react";
import { CartContext } from "../contexts/CartProvider";
import CartItem from "./CartItem";

function Sidebar() {
  const { cart, removeCart, reset, increament, decreament, total } =
    useContext(CartContext);
  return (
    <>
      <div
        className="offcanvas offcanvas-end"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabIndex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div className="offcanvas-header border-bottom border-dark-subtle ">
          <h5 className="offcanvas-title " id="offcanvasScrollingLabel">
            Ваша корзина
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body d-flex flex-column  ">
          {cart.map((product) => {
            return (
              <CartItem
                product={product}
                key={product.id}
                increament={increament}
                decreament={decreament}
                removeCart={removeCart}
              />
            );
          })}
          <div className=" d-flex align-items-center justify-content-between border-top py-2 ">
            <div className=" fw-bolder ">Общая сумма: $ {total.toFixed(2)}</div>
            <div onClick={() => reset()} className="btn btn-danger border-0 ">
              Очистить
            </div>
          </div>
          <button  className="btn btn-primary mt-4">Заказать покупок</button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;