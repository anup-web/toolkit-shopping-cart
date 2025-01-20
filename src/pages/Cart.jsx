import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart);
    const handleRemove = (productId) => {
        dispatch(remove(productId));
    };
  return (
    <div className="container mx-auto grid grid-cols-12 items-start gap-6 pt-4 pb-16">
  <div className="col-span-3">
    <div className="px-4 py-3 shadow flex items-center gap-4">
      <div className="flex-shrink-0">
        <img src="/../assets/images/avatar.png" alt="profile" className="rounded-full w-14 h-14 border border-gray-200 p-1 object-cover" />
      </div>
      <div className="flex-grow">
        <p className="text-gray-600">Hello,</p>
        <h4 className="text-gray-800 font-medium">John Doe</h4>
      </div>
    </div>
    <div className="mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600">
      <div className="space-y-1 pl-8">
        <a href="#" className="block font-medium capitalize transition">
          <span className="absolute -left-8 top-0 text-base">
            <i className="fa-regular fa-address-card" />
          </span>
          Manage account
        </a>
        <a href="#" className="relative hover:text-primary block capitalize transition">
          Profile information
        </a>
        <a href="#" className="relative hover:text-primary block capitalize transition">
          Manage addresses
        </a>
        <a href="#" className="relative hover:text-primary block capitalize transition">
          Change password
        </a>
      </div>
      <div className="space-y-1 pl-8 pt-4">
        <a href="#" className="relative hover:text-primary block font-medium capitalize transition">
          <span className="absolute -left-8 top-0 text-base">
            <i className="fa-solid fa-box-archive" />
          </span>
          My order history
        </a>
        <a href="#" className="relative hover:text-primary block capitalize transition">
          My returns
        </a>
        <a href="#" className="relative hover:text-primary block capitalize transition">
          My Cancellations
        </a>
        <a href="#" className="relative hover:text-primary block capitalize transition">
          My reviews
        </a>
      </div>
      <div className="space-y-1 pl-8 pt-4">
        <a href="#" className="relative hover:text-primary block font-medium capitalize transition">
          <span className="absolute -left-8 top-0 text-base">
            <i className="fa-regular fa-credit-card" />
          </span>
          Payment methods
        </a>
        <a href="#" className="relative hover:text-primary block capitalize transition">
          voucher
        </a>
      </div>
      <div className="space-y-1 pl-8 pt-4">
        <a href="#" className="relative text-primary block font-medium capitalize transition">
          <span className="absolute -left-8 top-0 text-base">
            <i className="fa-regular fa-heart" />
          </span>
          My wishlist
        </a>
      </div>
      <div className="space-y-1 pl-8 pt-4">
        <a href="#" className="relative hover:text-primary block font-medium capitalize transition">
          <span className="absolute -left-8 top-0 text-base">
            <i className="fa-solid fa-right-from-bracket" />
          </span>
          Logout
        </a>
      </div>
    </div>
  </div>
  <div className="col-span-9 space-y-4">
  {products.map((product) => (
    <div key={product.id} className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
      <div className="w-28">
        <img src={product.image} alt={product.title} className="w-full" />
      </div>
      <div className="w-1/3">
        <h2 className="text-gray-800 text-xl font-medium ">{product.title}</h2>        
      </div>
      <div className="text-primary text-lg font-semibold">{product.price}</div>
      <button onClick={() => handleRemove(product.id)} className="px-6 py-2 text-center text-sm text-white bg-rose-500 border border-rose-500 rounded hover:bg-transparent hover:text-rose-500 transition font-roboto font-medium">
        Remove </button>
      <div className="text-gray-600 cursor-pointer hover:text-primary">
        <i className="fa-solid fa-trash" />
      </div>
    </div>
    ))}
   
  </div>
</div>

  )
}

export default Cart
