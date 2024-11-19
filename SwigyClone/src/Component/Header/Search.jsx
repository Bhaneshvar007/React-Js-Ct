import React from "react";

const Search = ({ search, setSearch }) => {
  return (
    <div
      className={`fixed inset-0 z-20 bg-black bg-opacity-50 flex justify-center items-start duration-300 transition-all ${
        search ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={() => setSearch(false)} // Close on overlay click
    >
      {/* Search Box */}
      <div
        className="w-[90%] sm:w-[500px] h-[50px] bg-white mt-20 flex items-center rounded-lg shadow-lg overflow-hidden border border-orange-700"
        onClick={(e) => e.stopPropagation()} // Prevent closing on content click
      >
        <input
          type="text"
          placeholder="Search anything..."
          className="flex-1 h-full outline-none px-4 text-sm sm:text-base"
        />
        <button className="bg-orange-700 text-white px-4 sm:px-10 h-full font-semibold text-sm sm:text-base">
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
