import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem';

function Cart() {
  
  const {cart}=useSelector((state)=>state);
  
 
  
  return (
    <div className='grid grid-cols-2'>
         <div className="cartItem">
             {
               
                cart.map((item)=>{return <CartItem item={item} key={item.id} />})
               
             }
         </div>

         <div className="order-place">
               
         </div>
    </div>
  )
}

export default Cart