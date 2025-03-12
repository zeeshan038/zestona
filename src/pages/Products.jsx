import React from 'react';
import products from '../products';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div className="mx-auto max-w-6xl mt-20">
      <h1 className='text-3xl font-bold text-center' >Explore our prodcuts</h1>
      <div className="flex justify-center lg:justify-start flex-wrap items-start gap-4 mt-6">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <div className="p-4 rounded-lg">
              <img
                src={product.image}
                alt={product.title}
                className="h-72 w-full md:w-60 rounded-md mb-4"
              />
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <div className="flex items-center space-x-2">
                <p className="text-gray-500 line-through">Rs.{product.originalPrice} PKR</p>
                <p className="">Rs.{product.discountedPrice} PKR</p>
              </div>
            </div>
          </Link>
        ))}


      </div>
    </div>
  );
};

export default Products;
