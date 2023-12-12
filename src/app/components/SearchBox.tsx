import React from "react";

const SearchBox = () => {
  return (
    <form className="w-4/5 lg:w-1/2">
      <div className="relative flex items-center w-full border-2 border-orange-300 rounded-full">
        <input
          type="search"
          id="search-dropdown"
          className="z-5 block p-2.5 rounded-full  h-18 w-full z-10 text-sm text-gray-900  focus:outline-none"
          placeholder="Try graphic design, copywriter, or webflow website..."
          required
        />
        <button
          type="submit"
          className="z-20 w-auto p-2 mr-2 text-sm font-medium text-white bg-blue-700 border border-blue-700 rounded-full h-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default SearchBox;
