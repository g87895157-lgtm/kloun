import React from 'react'
import { IoIosSearch } from "react-icons/io";

const Search = ({ searchValue, onSearchChange }) => {
  return (
    <div>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Anime nomini yozing..."
        className="bg-[#16171d] text-[#9ca3af] 
      placeholder:text-[#6b6375] border border-[#2e303a] focus:outline-none focus:ring-2 
      focus:ring-[#aa3bff] w-100 h-12 absolute top-10 left-30 rounded-2xl px-10"
      />
      <IoIosSearch className='w-8 h-8 absolute top-12 left-31' />
    </div>
  )
}

export default Search
