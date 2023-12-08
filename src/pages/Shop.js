import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductProvider";
import Products from "../components/Products";
import { CartContext } from "../contexts/CartProvider";

function Shop() {
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const womenFiltered = products.filter((item) => {
    return item.category === "women's clothing" || item.category === "jewelery";
  });

  return (
    <div className="shop mt-5 pt-5 ">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-3">
            <h5 className=" text-uppercase fw-bolder d-flex align-items-center justify-content-center  ">
              Women's fashion
            </h5>
            <p className="d-flex justify-content-center">
              Shop our new arrivals from established brands
            </p>
            <hr />
          </div>
          <div className="col-12 d-flex flex-wrap justify-content-start">
            {womenFiltered.map((product) => {
              return (
                <Products
                  product={product}
                  addToCart={addToCart}
                  key={product.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
