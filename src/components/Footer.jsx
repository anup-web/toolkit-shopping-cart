import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
  <footer className="bg-white pt-16 pb-12 border-t border-gray-100">
    <div className="container mx-auto grid grid-cols-1 ">
      <div className="col-span-1 space-y-4">
        <img src="assets/images/logo.svg" alt="logo" className="w-30" />
        <div className="mr-2">
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, hic?
          </p>
        </div>
        <div className="flex space-x-5">
          <Link to="/" className="text-gray-400 hover:text-gray-500"><i className="fa-brands fa-facebook-square" /></Link>
          <Link to="/" className="text-gray-400 hover:text-gray-500"><i className="fa-brands fa-instagram-square" /></Link>
          <Link to="/" className="text-gray-400 hover:text-gray-500"><i className="fa-brands fa-twitter-square" /></Link>
          <Link to="/" className="text-gray-400 hover:text-gray-500">
            <i className="fa-brands fa-github-square" />
          </Link>
        </div>
      </div>
      <div className="col-span-2 grid grid-cols-2 gap-4">
        <div className="grid grid-cols-2 gap-4 md:gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Solutions</h3>
            <div className="mt-4 space-y-4">
              <Link to="/" className="text-base text-gray-500 hover:text-gray-900 block">Marketing</Link>
              <Link to="/" className="text-base text-gray-500 hover:text-gray-900 block">Analitycs</Link>
              <Link to="/" className="text-base text-gray-500 hover:text-gray-900 block">Commerce</Link>
              <Link to="/" className="text-base text-gray-500 hover:text-gray-900 block">Insights</Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Support</h3>
            <div className="mt-4 space-y-4">
              <Link to="/" className="text-base text-gray-500 hover:text-gray-900 block">Pricing</Link>              
              <Link to="/" className="text-base text-gray-500 hover:text-gray-900 block">Guides</Link>
              <Link to="/" className="text-base text-gray-500 hover:text-gray-900 block">API Status</Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Solutions</h3>
            <div className="mt-4 space-y-4">
              <Link to="/" className="text-base text-gray-500 hover:text-gray-900 block">Marketing</Link>
              <Link to="/" className="text-base text-gray-500 hover:text-gray-900 block">Analitycs</Link>
              <Link to="/" className="text-base text-gray-500 hover:text-gray-900 block">Commerce</Link>
              <Link to="/" className="text-base text-gray-500 hover:text-gray-900 block">Insights</Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Support</h3>
            <div className="mt-4 space-y-4">
              <Link to="/" className="text-base text-gray-500 hover:text-gray-900 block">Pricing</Link>             
              <Link to="/" className="text-base text-gray-500 hover:text-gray-900 block">Guides</Link>
              <Link to="/" className="text-base text-gray-500 hover:text-gray-900 block">API Status</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <div className="bg-gray-800 py-4">
    <div className="container mx-auto flex items-center justify-between">
      <p className="text-white">© TailCommerce - All Right Reserved</p>
      <div>
        <img src="/assets/images/methods.png" alt="methods" className="h-5" />
      </div>
    </div>
  </div>
</div>

  )
}

export default Footer