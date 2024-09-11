import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

function Cart() {
  const cart = useSelector((state) => state.cart);
  // const var += cart.map((c)=>c.price);
  const [amount, setAmount] = useState(0);

  useEffect(()=>{
    setAmount(cart.reduce((acc, curr)=> acc + curr.price, 0))
  }, [cart])

  return (
    <>
      {cart.length !== 0 ? (
        <div className="max-w-[80%] mx-auto m-16  flex  gap-x-20 gap-y-20 justify-start ">
          <div className="cartItem w-[60%]   flex flex-col justify-center items-center gap-10 border-b gap-y-10">
            {cart.map((item) => {
              return <CartItem item={item} key={item.id} />;
            })}
          </div>

          <div className="order-place mt-8 ">
            <h1 className="text-2xl font-semibold ">YOUR CART</h1>
            <h1 className="font-bold text-5xl text-green-500 mb-5">SUMMARY</h1>
            <div className="price-and-count h-full  ">
              <p className="text-xl font-bold">Total Items: {cart.length}</p>
            </div>
            <div className="checkout-btn  ">
              <p className="text-xl font-bold">Total Amount: ${amount}</p>
              <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">Checkout Now</button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {" "}
          <h1>Your cart is empty</h1>
        </div>
      )}
    </>
  );
}

export default Cart;
