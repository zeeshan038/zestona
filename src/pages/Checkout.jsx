import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  const singleProduct = location.state?.product;
  const { cartItems } = useSelector((state) => state.cart);

  // If a single product is passed, use it; otherwise, use cartItems
  const checkoutItems = singleProduct ? [singleProduct] : cartItems;

  const [userDetails, setUserDetails] = useState({
    phoneno: "",
    firstname: "",
    lastname: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const validateFields = () => {
    let newErrors = {};
    Object.keys(userDetails).forEach((key) => {
      if (!userDetails[key]) {
        newErrors[key] = "This field is required";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCheckout = () => {
    if (!validateFields()) return;

    const phoneNumber = "923479819738";
    let orderMessage = `🛒 *New Order Received!* \n\n`;

    checkoutItems.forEach((item, index) => {
      orderMessage += `${index + 1}. ${item.title} - ${item.quantity} x ${item.price} PKR\n`;
    });

    orderMessage += `\n📍 *Delivery Details:* \n👤 Name: ${userDetails.firstname} ${userDetails.lastname} \n📞 Phone: ${userDetails.phoneno} \n🏠 Address: ${userDetails.address}, \n🏠 City: ${userDetails.city}, \n🏠 Postal Code: ${userDetails.postalCode} \n`;
    orderMessage += `\n💰 *Total Price:* PKR ${checkoutItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}\n`;

    const encodedMessage = encodeURIComponent(orderMessage);
    window.location.href = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-white rounded-lg flex flex-col md:flex-row gap-6">
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2">
        <h2 className="text-xl font-bold mb-4">Delivery</h2>
        <div className="flex flex-col gap-4">
          {["firstname", "lastname", "phoneno", "address", "city", "postalCode"].map((field, index) => (
            <div key={index}>
              <label className="block text-sm font-medium capitalize">{field.replace(/([A-Z])/g, ' $1')}</label>
              <input
                type="text"
                name={field}
                value={userDetails[field]}
                onChange={handleChange}
                className={`w-full p-2 border rounded mt-1 ${errors[field] ? "border-red-500" : ""}`}
                placeholder={`Enter your ${field}`}
              />
              {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
            </div>
          ))}
        </div>
        <div className="mt-5">
          <h1 className="text-2xl font-bold">Shipping Method</h1>
          <div className="flex justify-between items-center border border-black p-2 rounded-md mt-2">
            <h1>Standard</h1>
            <h1>Free</h1>
          </div>
        </div>
        <div className="mt-5">
          <h1 className="text-2xl font-bold">Payment</h1>
          <div className="flex justify-between items-center border border-black p-2 rounded-md mt-2">
            <h1>Cash on Delivery (COD)</h1>
          </div>
        </div>
        <button
          onClick={handleCheckout}
          className="mt-6 w-full bg-[#0c3241] hidden md:block text-white p-2 rounded hover:bg-green-600"
        >
          Complete Order
        </button>
      </div>

      {/* Right Side - Selected Products */}
      <div className="md:w-1/2 md:mt-12">
        <div className="w-full p-4 rounded">
          <ul>
            {checkoutItems.map((item, index) => (
              <div key={index} className="flex space-y-2 items-center justify-between">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt="" className="h-24 rounded-md" />
                  <p>{item.title}</p>
                </div>
                <div>
                  <p>RS {item.price * item.quantity}</p>
                </div>
              </div>
            ))}
          </ul>
          <div className="mt-4 text-lg">
            <div className="flex text-[16px] justify-between">
              Subtotal: <span>PKR {checkoutItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}</span>
            </div>
            <div className="flex mt-2 text-[16px] justify-between">
              Shipping: <span>FREE</span>
            </div>
            <div className="flex mt-2 text-[16px] justify-between">
              Total: <span>PKR {checkoutItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}</span>
            </div>
          </div>
        </div>
        <button
          onClick={handleCheckout}
          className="mt-6 w-full md:hidden bg-[#0c3241] text-white p-2 rounded hover:bg-green-600"
        >
          Complete Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
