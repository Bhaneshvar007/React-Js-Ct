import React from 'react';

function Progress({ name, img, wid }) {
    return (
        <div className="flex flex-col space-x-3  md:w-[650px]">
            <div className="flex items-center mb-2">
                <img src={img} alt={name} className="h-8 mx-3" />
                <p className="text-lg font-medium">{name}</p>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2.5">
                <div className="bg-yellow-500 h-2.5 rounded-full" style={{
                    width: `${wid}%`,
                }} ></div>
            </div>
        </div>
    );
}



export default Progress;
