import React, { useEffect, useState } from 'react'
import logo from '../../../public/logo.png'
import { NavLink,Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import './navbar.css';
import { useSelector } from 'react-redux';
function Navbar() {
 
  const [itemCount,setItemCount]=useState(0);
  const cart=useSelector(state=>state.cart);
  useEffect(()=>{
    setItemCount(cart.length);
  },[cart]);
  
  return (
    <div className='bg-[#0f172a] py-4 text-white mb-2'>
        <nav className='max-w-[70rem] mx-auto flex justify-between items-center'>
          <div className="logo">
          <Link to='/'><img src={logo} alt="logo" className='h-[50px] w-[150px]' /></Link>
          </div>
          <div className="cart flex gap-2 items-center">
              <NavLink to='/' ><h1 className='text-lg'>Home</h1> </NavLink>
              <div className="cart flex justify-center items-center">
              <NavLink to="/cart" ><FaShoppingCart/></NavLink>
             {itemCount>0? <small className=" badge text-xs relative -left-1 -top-1 px-1 bg-green-500 animate-bounce ">{itemCount}</small>:''}
              </div>
          </div>
        </nav>
    </div>
  )
}

export default Navbar