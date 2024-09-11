import React from "react";
import { MdDelete } from "react-icons/md";
function CartItem({ item }) {
  let title = item.title;
  //title = title.substring(0, 15) + "...";
  let description=item.description;
  description=description.substring(0, 50);
    
  return (
   <>
        <div className="cart-item flex gap-5">
             <div className="product-image">
              <img src={item.image} alt="product-image" className="h-[180px]"/>
             </div>
             <div className="product-details flex flex-col gap-5">
                <div className="title">
                  <h1>{title}</h1>
                </div>
                <div className="description">
                    <small>{description}</small>
                </div>
                <div className="price-and-remove-btn flex justify-between items-center">
                    <p>${item.price}</p>
                    <div className="remove-btn rounded-full bg-red-300 p-3 hover:cursor-pointer hover:bg-red-500 hover:text-white text-red-800">
                    <MdDelete />
                    </div>
                </div>
             </div>
        </div>
   </>
  )}

export default CartItem;
