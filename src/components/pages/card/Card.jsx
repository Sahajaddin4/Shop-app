import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {add,remove} from '../../../redux/CartSlice';
function Card(props) {
  const product = props.product;
  let title = product.title;
  title = title.substring(0, 15) + "...";
  let description = product.description;
  description = description.substring(0, 50);

  const [addedCart,setAddedCart]=useState(false);
  
  const dispatch=useDispatch();
  //Handle adding element cart
  function handleAddtoCart()
  {
       dispatch(add(product));
       toast.success('Product added to cart',{
        position:'top-center',
        hideProgressBar:false,
        autoClose:500
       });
      setAddedCart(true);
  }

  function handleRemoveCart(){
    dispatch(remove(product.id));
    toast.success('Product removed from cart',{
     position:'top-center',
     hideProgressBar:false,
     autoClose:500
    });
    setAddedCart(false)
  }
  return (
    <div className="group shadow-xl hover:shadow-2xl transform transition-transform duration-500 h-[400px] max-w-[270px] hover:scale-110 px-5 py-7 rounded-xl border">
      <div className="product-details flex flex-col gap-3 items-center ">
        <div className="title">
          <h1 className="font-semibold text-lg">{title}</h1>
        </div>
        <div className="desc px-5">
          <small className="text-slate-400 ">{description}</small>
        </div>
        <div className="image my-2">
          <img src={product.image} alt="product" className="h-[180px]" />
        </div>
      </div>

      <div className="addtocart-price flex justify-between mt-5 items-center">
        <div className="price font-bold text-green-500">${product.price}</div>
        <div className="cart btn">
         {
            addedCart?( <button  onClick={handleRemoveCart} className="bg-white border-2 group-hover:bg-[#374151]  group-hover:text-white  rounded-full px-4 py-1">
                <p className="font-semibold text-[12px]">REMOVE ITEM</p>
              </button>):( <button onClick={handleAddtoCart} className="bg-white border-2 group-hover:bg-[#374151] group-hover:text-white  rounded-full px-4 py-1">
                <p className="font-semibold text-[12px]">ADD TO CART</p>
              </button>)
         }
        </div>
      </div>
    </div>
  );
}

export default Card;
