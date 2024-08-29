import React from "react";
import { useSelector } from "react-redux";

export default function Cart() {
  const items = useSelector((state) => state.cart);
  return (
    <>
      <div className="cartWrapper">
        {items.map((item) => {
          return (
            <div className="cartCard">
              <img src={item.image} alt="product" />
              <h5>{item.title}</h5>
              <h5>Price : ${item.price}</h5>
              <button
                className="remove-btn"
                // onClick={() => handleRemove(item.id)}
              >
                Remove from Cart
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
