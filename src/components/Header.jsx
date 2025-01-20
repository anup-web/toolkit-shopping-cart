import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';


const Header = () => {
  const items = useSelector((state) => state.cart);
  return (
  <>
    <header className="py-4 shadow-sm bg-white">
  <div className="container mx-auto flex items-center justify-between">
    <Link to="/" >
      <img src="/assets/images/logo.svg" alt="Logo" className="w-32" />
    </Link>
    <div className="w-full max-w-xl relative flex">
      <span className="absolute left-4 top-3 text-lg text-gray-400">
        <i className="fa-solid fa-magnifying-glass" />
      </span>
      <input type="text" name="search" id="search" className="w-full border border-rose-500 border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none hidden md:flex" placeholder="search" />
      <button className="bg-rose-500 border border-rose-500 flex items-center justify-center text-white px-8 rounded-r-md hover:bg-transparent hover:text-rose-500 transition hidden md:flex">Search</button>
    </div>
    <div className="flex items-center space-x-4">
      <Link to="/" className="text-center text-gray-700 hover:text-rose-500 transition relative">
        <div className="text-2xl">
          <i className="fa-regular fa-heart" />
        </div>
        <div className="text-xs leading-3">Wishlist</div>
        <div className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-rose-500 text-white text-xs">
          8</div>
      </Link>
      <Link to="/cart" className="text-center text-gray-700 hover:text-rose-500 transition relative">
        <div className="text-2xl">
          <i className="fa-solid fa-bag-shopping" />
        </div>
        <div className="text-xs leading-3">Cart</div>
        <div className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-rose-500 text-white text-xs">
        {items.length} </div>
      </Link>
      <Link to="/" className="text-center text-gray-700 hover:text-rose-500 transition relative">
        <div className="text-2xl">
          <i className="fa-regular fa-user" />
        </div>
        <div className="text-xs leading-3">Account</div>
      </Link>
    </div>
  </div>
</header>
   <Navbar />
</>   
  )
}

export default Header