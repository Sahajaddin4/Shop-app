import React from 'react'
import logo from '../../../public/logo.png'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
  return (
    <div className='bg-[#0f172a] py-4 text-white mb-2'>
        <nav className='max-w-[70rem] mx-auto flex justify-between items-center'>
          <div className="logo">
          <img src={logo} alt="logo" className='h-[50px] w-[150px]' />
          </div>
          <div className="cart flex gap-2 items-center">
              <NavLink to='/' ><h1 className='text-lg'>Home</h1> </NavLink>
              <NavLink to="/cart" ><FaShoppingCart/></NavLink>
          </div>
        </nav>
    </div>
  )
}

export default Navbar