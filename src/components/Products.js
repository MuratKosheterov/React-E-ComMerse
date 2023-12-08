import React from "react";
import { Link } from "react-router-dom";

function Products({ product, addToCart }) {
  const { image, category, price, title, id } = product;
  return (
    <div className="card border-dark mb-sm-2   m-md-2  position-relative ">
      <Link
        to={`/product/${id}`}
        className="view-product position-absolute  top-0  end-0  mt-3  me-3  fs-5  bg-warning  px-2  cursore-pointer text-black "
      >
        <i className="bi bi-eye-fill"></i>
      </Link>
      <img src={image} className="card-img-top images p-5" alt={title} />
      <div className="card-body">
        <h5 className="card-title">
          <strong>Категория:</strong> {category}
        </h5>
        <p className="card-text">
          <strong>Цена:$</strong> {price}
        </p>
        <p className="card-text">
          <strong>Зоголовок:</strong> {title}
        </p>
        <div
          onClick={() => addToCart(product, id)}
          className="btn btn-dark rounded-pill"
        >
          Покупать
        </div>
      </div>
    </div>
  );
}

export default Products;
