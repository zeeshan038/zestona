import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import products from "../products";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <h2 className="text-center text-2xl font-bold">Product Not Found</h2>;
  }

  // Increase quantity
  const increaseQuantity = () => setQuantity((prev) => prev + 1);

  // Decrease quantity (minimum 1)
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  // Filter related products (excluding the current product)
  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="max-w-6xl mt-20 mx-auto p-6">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-20">
        {/* Product Image - Left */}
        <div className="w-full lg:w-1/2">
          <img
            src={product.image}
            alt={product.title}
            className="w-full object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Product Details - Right */}
        <div className="w-full lg:w-1/2 space-y-4">
          <h1 className="text-4xl font-bold">{product.title}</h1>
          <p className="text-gray-600 text-xl font-semibold">Price: ${product.price}</p>
          <p className="text-gray-700 leading-relaxed">
            This is a detailed description of the product, highlighting its features,
            benefits, and specifications.
          </p>

          {/* Quantity Selector */}
          <div className="flex items-center space-x-4 mt-4">
            <div className="border flex items-center justify-between space-x-10 border-black p-1 px-3">
              <button className="rounded-md transition" onClick={decreaseQuantity}>
                -
              </button>
              <span className="text-lg font-semibold">{quantity}</span>
              <button className="text-gray-800 py-1 rounded-md transition" onClick={increaseQuantity}>
                +
              </button>
            </div>
          </div>

          <button className="py-3 mt-4 w-full cursor-pointer border border-gray-700 rounded-md hover:border-black transition">
            Add to Cart
          </button>
          <button className="py-3 bg-[#0c3241] text-white w-full rounded-md hover:bg-[#354c55] cursor-pointer transition">
            Buy Now
          </button>
        </div>
      </div>

    </div>
  );
};

export default ProductDetails;
