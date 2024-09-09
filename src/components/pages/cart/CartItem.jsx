import React from "react";

function CartItem({ item }) {
   
    
  return (
    <div className={item?'flex justify-center items-center':''}>
      {item ? (
        <div className="grid md:grid-cols-2">
          <div className="product-details flex flex-col gap-3 items-center ">
            <div className="title">
              <h1 className="font-semibold text-lg">{item.title}</h1>
            </div>
            <div className="desc px-5">
              <small className="text-slate-400 ">{item.description}</small>
            </div>
            <div className="image my-2">
              <img src={item.image} alt="product" className="h-[180px]" />
            </div>
          </div>

          <div className="order"></div>
        </div>
      ) : (
        <div className="cart-empty ">
             <h1>Your cart is empty!</h1>
             <button disabled className="bg-green-500 text-white py-2 px-4 m-1 rounded">Shop Now</button>
        </div>
      )}
    </div>
  );
}

export default CartItem;
