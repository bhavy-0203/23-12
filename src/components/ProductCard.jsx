import React from "react";
import { useDispatch } from "react-redux";



const ProductCard = ({ id, title, price, img }) => {
  const dispatch = useDispatch();
  const addtoCart = async () => {
    let data = {
      title: title,
      price: price,
      img: img,
      qty: 1,
      productId: id,
    };
   
  };
  return (
    <div>
      <img
        src={img}
        alt=""
        width="300px"
        height="300px"
        style={{
          objectFit: "cover",
        }}
      />
      <h6>{title}</h6>
      <p>{price}</p>
      <button onClick={addtoCart}>Buy</button>
    </div>
  );
};

export default ProductCard;
