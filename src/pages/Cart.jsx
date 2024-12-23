import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const selector = useSelector((store) => store.carts);
  return <div>Cart</div>;
};

export default Cart;
