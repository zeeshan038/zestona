import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import products from "../products";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <h2 className="text-center text-2xl font-bold">Product not found</h2>;
  }

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity, totalPrice: product.price * quantity }));
    toast.success("Item added to cart!", { autoClose: 2000 });
  };

  const handleBuyNow = () => {
    navigate("/checkout", { state: { product: { ...product, quantity, totalPrice: product.price * quantity } } });
  };
  
  return (
    <div className="max-w-6xl mt-20 mx-auto p-6">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-20">
        <div className="w-full lg:w-1/2">
          <img src={product.image} alt={product.title} className="w-full object-cover rounded-lg shadow-md" />
        </div>
        <div className="w-full lg:w-1/2 space-y-4">
          <h1 className="text-4xl font-bold">{product.title}</h1>
          <p className="text-gray-700">{product.description}</p>
          <p className="font-bold text-lg">Price: RS.{product.price} PKR</p>

          <div className="flex items-center space-x-4 mt-4">
            <div className="border flex items-center justify-between space-x-10 border-black p-1 px-3">
              <button onClick={decreaseQuantity}>-</button>
              <span className="text-lg font-semibold">{quantity}</span>
              <button onClick={increaseQuantity}>+</button>
            </div>
          </div>

          <div className="">
            <h3 className="font-semibold text-lg">How to Use:</h3>
            <p className="">{product.usage1}</p>
            <p className="">{product.usage2}</p>
            <p className="">{product.usage3}</p>
            <p className="">{product.usage4}</p>
          </div>

          <button onClick={handleAddToCart} className="py-3 cursor-pointer mt-4 w-full border border-gray-700 rounded-md hover:border-black transition">
            Add to Cart
          </button>
          <button onClick={handleBuyNow} className="py-3 bg-[#0c3241]  cursor-pointer text-white w-full rounded-md hover:bg-[#354c55] transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
