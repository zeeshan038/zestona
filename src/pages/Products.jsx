import React from 'react';
import products from '../products';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div className="mx-auto mt-20">

      <h1 className='text-3xl font-bold text-center' >Explore our prodcuts</h1>
      <div className="flex justify-center flex-wrap items-center gap-4 mt-6">
        {products.map((product) => (
          <Link to={`/product/${product.id}`}>
            <div key={product.id} className=" p-4 rounded-lg  ">
              <img src={product.image} alt={product.title} className=" h-96 w-80   rounded-md mb-4" />
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-gray-600">Price: ${product.price}</p>

            </div>
          </Link>
        ))}

      </div>
    </div>
  );
};

export default Products;
