import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function NavBar() {
  const items = useSelector((state) => state.cart);
  console.log(items);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span>Redux Store</span>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/cart">
          Cart
        </Link>
        <span className="cartCount">Cart Items : {items.length}</span>
      </div>
    </div>
  );
}
