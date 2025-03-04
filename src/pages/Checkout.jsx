import React, { useState } from "react";

const Checkout = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const cartItems = [
    { name: "Face Serum", price: 1500, quantity: 2 },
    { name: "Moisturizer", price: 2000, quantity: 1 },
  ];

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleCheckout = () => {
    const phoneNumber = "923045321730"; 
    let orderMessage = `🛒 *New Order Received!* \n\n`;
    
    cartItems.forEach((item, index) => {
      orderMessage += `${index + 1}. ${item.name} - ${item.quantity} x ${item.price} PKR\n`;
    });

    orderMessage += `\n📍 *Delivery Details:* \n👤 Name: ${userDetails.name} \n📞 Phone: ${userDetails.phone} \n🏠 Address: ${userDetails.address}`;
    
    const encodedMessage = encodeURIComponent(orderMessage);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.location.href = whatsappURL;
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg flex gap-6">
      {/* Left Side - Form */}
      <div className="w-1/2">
        <h2 className="text-xl font-bold mb-4">Checkout</h2>
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={userDetails.name}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
            placeholder="Enter your name"
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium">Phone</label>
          <input
            type="text"
            name="phone"
            value={userDetails.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium">Address</label>
          <textarea
            name="address"
            value={userDetails.address}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
            placeholder="Enter your address"
          ></textarea>
        </div>
        <button
          onClick={handleCheckout}
          className="mt-6 w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          Continue to WhatsApp
        </button>
      </div>

      {/* Right Side - Selected Products */}
      <div className="w-1/2 bg-gray-100 p-4 rounded">
        <h2 className="text-xl font-bold mb-4">Selected Products</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="flex justify-between border-b py-2">
              <span>{item.name} (x{item.quantity})</span>
              <span>{item.price * item.quantity} PKR</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 text-lg font-semibold">
          Total: {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)} PKR
        </div>
      </div>
    </div>
  );
};

export default Checkout;