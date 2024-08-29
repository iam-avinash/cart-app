import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Store/cartSlice";

export default function Products() {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  function handleAddToCart(product) {
    dispatch(addToCart(product)); // payload being the product
  }
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="productsWrapper">
      {products.map((product) => {
        return (
          <div className="card" key={products.id}>
            <img src={product.image} alt="Loading..." />
            <h6>{product.title} </h6>
            <h5>{product.price}$</h5>
            <button onClick={() => handleAddToCart(product)} className="btn">
              Add to card
            </button>
          </div>
        );
      })}
    </div>
  );
}
