import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
  <div className="container flex mx-auto">
    <div className="flex items-center justify-between flex-grow py-5">
      <div className="flex items-center space-x-6 capitalize">
        <Link to="/" className="text-gray-200 hover:text-white transition">Home</Link>
        <Link to="shop" className="text-gray-200 hover:text-white transition">Shop</Link>
        <Link to="about" className="text-gray-200 hover:text-white transition">About us</Link>
        <Link to="contact" className="text-gray-200 hover:text-white transition">Contact us</Link>
      </div>
      <Link to="login" className="text-gray-200 hover:text-white transition">Login</Link>
    </div>
  </div>
</nav>

  )
}

export default Navbar