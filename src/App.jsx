import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import React from "react";
import NavBar from "./Component/NavBar";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import { Provider } from "react-redux";
import store from "./Store/Store";

export default function App() {
  return (
    <>
      {/* <NavBar /> */}

      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}
