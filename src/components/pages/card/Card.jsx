import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { add, checkProductIsPresent, remove } from '../../../redux/CartSlice';

function Card(props) {
  // Destructuring the product prop
  const product = props.product;

  // Shorten the product title and description
  let title = product.title;
  title = title.substring(0, 15) + "...";
  let description = product.description;
  description = description.substring(0, 50);

   // Get the current cart state from the redux store
   const isProductPresent = useSelector(state =>checkProductIsPresent(state,product.id)); ////////////////////////////////////////////////////////////////new 
  

  // State to track if the product has been added to the cart
  const [addedCart, setAddedCart] = useState(false); 

  useEffect(()=>{
          setAddedCart(isProductPresent);
  },[handleAddtoCart,handleRemoveCart]);
  // Dispatch function to trigger actions in the redux store
  const dispatch = useDispatch();

  // Handle adding the product to the cart
  function handleAddtoCart() {
    // Dispatch the add action with the product as payload
    dispatch(add(product));

    // Show a success toast notification
    toast.success('Product added to cart', {
      position: 'top-center',
      hideProgressBar: false,
      autoClose: 500
    });

    // Set the local state to reflect the product has been added
    setAddedCart(true);
  }

  // Handle removing the product from the cart
  function handleRemoveCart() {
    // Dispatch the remove action with the product id as payload
    dispatch(remove(product.id));

    // Show a success toast notification for removal
    toast.success('Product removed from cart', {
      position: 'top-center',
      hideProgressBar: false,
      autoClose: 500
    });

    // Set the local state to reflect the product has been removed
    setAddedCart(false);
  }

  return (
    <div className="group shadow-xl hover:shadow-2xl transform transition-transform duration-500 h-[400px] max-w-[270px] hover:scale-110 px-5 py-7 rounded-xl border">
      {/* Product Details */}
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

      {/* Add to Cart and Price Section */}
      <div className="addtocart-price flex justify-between mt-5 items-center">
        <div className="price font-bold text-green-500">${product.price}</div>
        
        {/* Conditional rendering for the Add/Remove button */}
        <div className="cart btn">
         {
           addedCart ? ( 
            <button onClick={handleRemoveCart} className="bg-white border-2 group-hover:bg-[#374151] group-hover:text-white rounded-full px-4 py-1">
              <p className="font-semibold text-[12px]">REMOVE ITEM</p>
            </button>
           ) : ( 
            <button onClick={handleAddtoCart} className="bg-white border-2 group-hover:bg-[#374151] group-hover:text-white rounded-full px-4 py-1">
              <p className="font-semibold text-[12px]">ADD TO CART</p>
            </button>
           )
         }
        </div>
      </div>
    </div>
  );
}

export default Card;
