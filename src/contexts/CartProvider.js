import React from "react";
import { useState, useEffect } from "react";
import { createContext } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0)

  const [itemAmount, setItemAmount] = useState(0)

  useEffect(() => {
    const total = cart.reduce((acc, curr) => {
      return acc + curr.price * curr.amount;
    }, 0);
    setTotal(total);
  }, [cart]);

  useEffect(()=>  {
    if(cart) {
    const amount = cart.reduce((acc, curr )=> {
      return acc + curr.amount
    },0);
    setItemAmount(amount)
  }
  },[cart])

  function addToCart(product, id) {
    const newItem = { ...product, amount: 1 };

    const cartItem = cart.find((item) => {
      return item.id === id;
    });
  
    if (cartItem) {
      const newCart = [...cart].map(item => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  }

  function increament(id) {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  }

  
  function decreament(id) {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartItem.amount < 2) {
      removeCart(id);
    }
  };


  function removeCart(id) {
    const deletedCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(deletedCart);
  }

  function reset() {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{ removeCart, reset, addToCart, cart, increament, decreament, total, itemAmount }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;