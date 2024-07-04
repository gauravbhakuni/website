"use client";
import { useState } from "react";
import { IoSearchCircle } from "react-icons/io5";


const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for shoes..."
        className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
      />
      <span className="text-white pl-4 text-4xl hover:text-accent cursor-pointer">
        <IoSearchCircle />
      </span>
    </form>
  );
};

export default SearchBar;
