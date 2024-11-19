import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import Context from '../Context';
import { MdStars } from 'react-icons/md';
import PopUp from './PopUp';

const BuyNowCard = () => {
    let { id } = useParams();
    let { recipiesData, setBuyCart } = useContext(Context);
    let newData = recipiesData.filter((val, ind) => ind.toString() === id);

    let [popup, setPopup] = useState(false);

    function addToCart(item) {
        setBuyCart((prev) => [...prev, item]);
    }

    return (
        <div className="mt-28 flex items-center justify-center px-4">
            {newData.map((val, id) => (
                <div className="bg-white shadow-lg rounded-lg p-6 max-w-[450px] w-full text-center">
                    <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-800 mb-4">{val.title}</h1>
                    <div className="mt-5 overflow-hidden">
                        <img
                            className="w-full h-64 object-cover rounded duration-500 hover:scale-105"
                            src={val.image}
                            alt={val.title}
                        />
                    </div>

                    {/* Description */}
                    <p className="mt-2 text-sm sm:text-base">Explore a world of flavors food, where every meal brings a taste of diverse cuisines to your table. From comforting classics to exotic dishes, we cater to every craving and occasion!</p>

                    <h2 className="text-base sm:text-lg font-medium text-gray-700 mt-2">{val.type}</h2>

                    <div className="mt-4">
                        <p className="text-xl font-bold text-gray-800">Price ${val.price}</p>
                        <button
                            className="mt-4 px-6 py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-500 transition duration-300"
                            onClick={() => {
                                setPopup(true);
                                addToCart(val);
                            }}
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
            ))}

            {/* Pop Up */}
            <PopUp popup={popup} setPopup={setPopup} />
        </div>
    );
};

export default BuyNowCard;
