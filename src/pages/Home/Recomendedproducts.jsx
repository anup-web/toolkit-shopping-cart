import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, STATUSES } from '../../store/productSlice';
import { add } from '../../store/cartSlice';
import { Link } from 'react-router-dom';

const Recomendedproducts = () => {
    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.product);

    // eslint-disable-next-line no-undef
    useEffect(() => {
        dispatch(fetchProducts());
        // const fetchProducts = async () => {
        //     const res = await fetch('https://fakestoreapi.com/products');
        //     const data = await res.json();
        //     console.log(data);
        //     setProducts(data);
        // };
        // fetchProducts();
    }, []);

    const handleAdd = (product) => {
        dispatch(add(product));
    }

    if (status === STATUSES.LOADING) {
        return <p>Loading...</p>;
    };
    
    if (status === STATUSES.ERROR) {
        return <p>Error fetching products.</p>;
    };
    
  return (
    <div className="container mx-auto pb-16">
  <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">Recomended for you</h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

    {products.map((product) => (
     
    <div key={product.id} className="bg-white shadow rounded overflow-hidden group">
      <div className="relative p-4">
        <img src={product.image} alt={product.title} className="w-full h-96" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
              justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
          <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-rose-500 flex items-center justify-center hover:bg-gray-800 transition" title="view product">
            <i className="fa-solid fa-magnifying-glass" />
          </a>
          <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-rose-500 flex items-center justify-center hover:bg-gray-800 transition" title="add to wishlist">
            <i className="fa-solid fa-heart" />
          </a>
        </div>
      </div>
      <div className="pt-4 pb-3 px-4">
        <Link to ={`products/${product.id}`}> 
          <h4 className="font-medium text-xl mb-2 text-gray-800 hover:text-rose-500 transition">
          {product.title}</h4>
        </Link>
        <div className="flex items-baseline mb-1 space-x-2">
          <p className="text-xl text-rose-500 font-semibold">{product.price}</p>
          {/* <p className="text-sm text-gray-400 line-through">$55.90</p> */}
        </div>
        {/* <div className="flex items-center">
          <div className="flex gap-1 text-sm text-yellow-400">
            <span><i className="fa-solid fa-star" /></span>
            <span><i className="fa-solid fa-star" /></span>
            <span><i className="fa-solid fa-star" /></span>
            <span><i className="fa-solid fa-star" /></span>
            <span><i className="fa-solid fa-star" /></span>
          </div>
          <div className="text-xs text-gray-500 ml-3">(150)</div>
        </div> */}
      </div>
      <button onClick={() => handleAdd(product)}
       className="block w-full py-1 text-center text-white bg-rose-500 border border-rose-500 rounded-b hover:bg-transparent hover:text-rose-500 transition">
        Add to cart
     </button>
    </div>
   
    ))}


  
  </div>
</div>

  )
}

export default Recomendedproducts