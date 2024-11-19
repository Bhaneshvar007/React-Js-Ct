import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdFilterListOff } from "react-icons/md";

const Filter = () => {
  return (
    <div className="w-full bg-white px-4 py-3 shadow-md flex flex-wrap gap-4 justify-between items-center">
      {/* Filter Section */}
      <div className="flex items-center gap-2 cursor-pointer hover:text-[#ff5200] transition">
        <MdFilterListOff className="text-xl text-gray-600" />
        <p className="text-gray-700 font-medium">Filter</p>
      </div>

      {/* Sort Section */}
      <div className="flex items-center gap-2 cursor-pointer hover:text-[#ff5200] transition">
        <p className="text-gray-700 font-medium">Sort By</p>
        <IoIosArrowDown className="text-lg text-gray-600" />
      </div>

      {/* Rating Filter */}
      <div className="flex items-center gap-2 cursor-pointer hover:text-[#ff5200] transition">
        <p className="text-gray-700 font-medium">Rating 4.0+</p>
      </div>

      {/* Additional Filters */}
      <div className="flex items-center gap-2 cursor-pointer hover:text-[#ff5200] transition">
        <p className="text-gray-700 font-medium">Pure-Veg</p>
      </div>
      <div className="flex items-center gap-2 cursor-pointer hover:text-[#ff5200] transition">
        <p className="text-gray-700 font-medium">Non-Veg</p>
      </div>
      <div className="flex items-center gap-2 cursor-pointer hover:text-[#ff5200] transition">
        <p className="text-gray-700 font-medium">Offers</p>
      </div>
      <div className="flex items-center gap-2 cursor-pointer hover:text-[#ff5200] transition">
        <p className="text-gray-700 font-medium">Less than ₹300</p>
      </div>
    </div>
  );
};

export default Filter;
