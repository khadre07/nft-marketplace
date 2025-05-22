"use client"

import React, { useState } from 'react';

const SearchBar = () => {

    const [query, setQuery] = useState("")

    function search(e: React.ChangeEvent<HTMLInputElement>){
        e.preventDefault()
        setQuery(e.target.value)

       
    }

    return (
        <div className="mx-auto flex w-[999] max-w-lg items-center justify-center">
  <div
    className="relative z-10 flex w-[978] cursor-pointer items-center overflow-hidden rounded-xl border border-slate-800 p-[1.5px]"
  >
    <div
      className="animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(slate_20deg,transparent_120deg)]"
    ></div>
    <div className="relative z-20 flex w-full rounded-[0.60rem] bg-white p-2">
      <input
        type="text"
        className="mr-2 inline-block h-full flex-1 rounded-lg bg-transparent px-2 py-3 text-gray-500 placeholder:text-slate-700 focus:outline-none focus:ring-1 focus:ring-black"
        placeholder="search your nft"
        value={query}
      />

      <span
        className="relative z-50 block rounded-lg border border-slate-800 bg-slate-900 px-8 py-3 text-center text-sm text-white shadow-2xl transition duration-200 hover:bg-slate-800"
      >
        Search
      </span>
    </div>
  </div>
</div>

    );
};

export default SearchBar;