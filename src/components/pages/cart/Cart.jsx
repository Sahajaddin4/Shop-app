import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem';

function Cart() {
  
  const cart=useSelector((state)=>state.cart);
  
 
 // console.log(typeof cart);
  
  return (
    <>
      {cart.length!==0?
    (<div className='max-w-[80%] mx-auto grid grid-cols-2 gap-10'>
         <div className="cartItem  flex flex-col justify-start items-center gap-10 border-b">
          {
            
             cart.map((item)=>{return <CartItem item={item} key={item.id} />})
            
          }
      </div>
 
      <div className="order-place">
            <h1>YOUR CART</h1>
            <h1>SUMMARY</h1>
            <div className="price-and-count">
               <h2>Total Items: 1</h2>
               <h2>Total Amount : $15.99</h2>
            </div>
            <div className="checkout-btn">
             <button>Checkout Now</button>
            </div>
      </div>
      </div>):(<div> <h1>Your cart is empty</h1></div>)
        
        }
        </>
  )
}

export default Cart