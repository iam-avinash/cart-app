import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
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
      {products.map((prod) => {
        return (
          <div className="card" key={products.id}>
            <img src={prod.image} alt="Loading..." />
            <h6>{prod.title} </h6>
            <h5>{prod.price}$</h5>
            <button className="btn">Add to card</button>
          </div>
        );
      })}
    </div>
  );
}
