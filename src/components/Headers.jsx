
import React, { useState } from "react";
import Login from "./Login";

export default function Headers() {
  const [showLoginpage,setshowLoginpage]=useState(false);
  return (
    <div className="p-2 flex justify-center items-center m-0" >
      <div className="font-extrabold text-center p-4" >ATG WORLD</div>
      <form className="w-80 mx-auto">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
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
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-2 ps-8 text-sm bg-gray-200 text-gray-900 rounded-full"
            placeholder="Search for your favorite groups in ATG"
            required
          />
        
        </div>
      </form>
     {showLoginpage && <Login /> }
      <button onClick={()=>{
        setshowLoginpage(true);
      }} className="font-extrabold  text-center p-4 ">Create Acoount</button>
    </div>
  );
}
