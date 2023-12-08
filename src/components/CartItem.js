import React from "react";

function CartItem({ product, removeCart, increament, decreament }) {
  const { price, image, id, amount } = product;
  return (
    <div className="Cart-item d-flex align-items-center border-bottom ">
      <div className="cart-image  d-flex  justify-content-center  align-items-center ">
        <img className=" img-fluid " src={image} alt="" />
      </div>
      <div className="container  ">
        <div className="row d-flex flex-column ms-3 ">
          <div className="col d-flex  ">
            <p  onClick={()=> decreament(id)} className="ms-1 p-1">-</p>
            <p className="p-1">{amount}</p>
            <p onClick={()=> increament(id)} className="me-1 p-1">+</p>
          </div>
          <div>
            <p>Цена: {price}$</p>
          </div>
        </div>
      </div>
      <div>
        <div className="container">
          <div className="row text-center">
            <div onClick={() => removeCart(id)} className="col cursore-pointer ">
              <i className="bi bi-x-lg"></i>
            </div>
            <div className="col cart-total px-4">Сумма: {price * amount }$</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;