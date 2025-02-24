import React from "react";
import { useParams } from "react-router-dom";
import products from "../products";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2 className="text-center text-2xl font-bold">Product Not Found</h2>;
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-60 object-cover rounded-md mb-4"
      />
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <p className="text-gray-600 text-lg">Price: ${product.price}</p>
      <p className="mt-4">This is a detailed description of the product.</p>
    </div>
  );
};

export default ProductDetails;
