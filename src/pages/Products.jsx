import React from 'react';
import products from '../products';

const Products = () => {
  return (
    <div className="mx-auto">
      <h1 className="text-2xl font-bold text-center mb-6">Products</h1>

      <div className="flex justify-center flex-wrap items-center gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-lg">
            <img src={product.image} alt={product.title} className=" h-80 w-full rounded-md mb-4" />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-600">Price: ${product.price}</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
             Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
