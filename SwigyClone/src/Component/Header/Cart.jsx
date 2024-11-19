import React, { useContext } from "react";
import { RiArrowDownSFill } from "react-icons/ri";
import Context from "../Context";

const Cart = ({ cart, setCart }) => {
  let { buyCart , setBuyCart } = useContext(Context);

  return (
    <div
      className={`fixed inset-0 z-20 bg-black bg-opacity-50 flex justify-end duration-300 transition-all ${cart ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      onClick={() => setCart(false)}
    >
      <div
        className="w-[90%] sm:w-[400px] h-[70%] sm:h-[500px] bg-white relative rounded-lg shadow-lg border-t-4 border-[#ff5200] flex flex-col items-center p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <RiArrowDownSFill className="text-[#ff5200] text-3xl rotate-180 absolute -top-5 right-10 sm:right-24" />

        <h1 className="text-2xl sm:text-[2.5rem] font-bold text-gray-600 mt-3">
          {buyCart.length > 0 ? "Your Cart" : "Empty Cart"}
        </h1>

        {buyCart.length === 0 ? (
          <p className="text-gray-500 mt-2 text-center">
            Your cart is currently empty. Add items to get started!
          </p>
        ) : (
          <div className="mt-4 overflow-y-auto h-[60%] w-full cart-overflow">
            {buyCart.map((item, index) => (
              <div key={index} className="flex justify-between items-center border-b py-2">
                <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-md" />
                <div className="ml-4">
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="text-gray-600">${item.price}</p>
                </div>
                <button className="text-red-600" onClick={() => setBuyCart(prev => prev.filter((_, i) => i !== index))}>
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        <button
          onClick={() => setCart(false)}
          className="mt-6 px-6 py-2 bg-[#ff5200] text-white font-semibold rounded-lg hover:bg-[#e04800] transition duration-300"
        >
          Explore Products
        </button>
      </div>
    </div>
  );
};

export default Cart;
