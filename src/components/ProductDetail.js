import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartProvider";
import { ProductContext } from "../contexts/ProductProvider";

function ProductDetail() {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  const { image, title, price, category } = product;

  return (
    <div className="ProductDetail mt-5 ">
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col-md-6 mb-ms-5 d-flex  justify-content-center  align-items-center ">
            <img className="detail-img  img-fluid my-5 " src={image} alt="" />
          </div>
          <div className="col-md-6  d-flex flex-column justify-content-center  text-center  position-relative ">
            <p className=" display-4  my-5   p-3 rounded-pill border-bottom  border-5  border-black text ">{title}</p>
            <p className="fs-4 "> Category: {category}</p>
            <p className=" fs-4 "> Price:$ {price}</p>
            <div className="row">
              <div className="col-6">
                <Link to={-1} className="btn btn-dark  w-50  ms-auto ">
                  Назад
                </Link>
              </div>
              <div className="col-6">
                <div onClick={()=> addToCart(product, product.id)} className="btn btn-dark w-50   me-auto ">Покупать</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
