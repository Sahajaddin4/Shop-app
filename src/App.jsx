import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Cart from "./components/pages/cart/Cart";
import Home from "./components/pages/Home";

function App() {
  return (
    <>
      <div>
        <Routes>
            <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
             <Route path="cart" element={<Cart />} />

            </Route>
        </Routes>
       
      </div>

    </>
  );
}

export default App;
