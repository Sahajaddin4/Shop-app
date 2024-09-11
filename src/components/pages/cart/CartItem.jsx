import React from "react";
import { MdDelete } from "react-icons/md";
function CartItem({ item }) {
  let title = item.title;
  //title = title.substring(0, 15) + "...";
  let description=item.description;
  description=description.substring(0, 100) + "....";
    
  return (
   <>
        <div className="cart-item p-2 flex gap-5 border-b-4">
             <div className="product-image w-[30%] my-auto">
              <img src={item.image} alt="product-image" className="object-cover"/>
             </div>
             <div className="product-details flex flex-col space-y-5 w-full">
                <div className="title">
                  <h1 className="font-semibold text-lg text-slate-700 ">{title}</h1>
                </div>
                <div className="description">
                    <small className="text-slate-700 font-medium">{description}</small>
                </div>
                <div className="price-and-remove-btn flex justify-between items-center">
                    <p className="text-green-500 font-bold text-lg">${item.price}</p>
                    <div className="remove-btn rounded-full bg-red-300 p-3 hover:cursor-pointer hover:bg-red-500 hover:text-white text-red-800">
                    <MdDelete />
                    </div>
                </div>
             </div>
        </div>
   </>
  )}

export default CartItem;
