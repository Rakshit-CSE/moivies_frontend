import React from "react";
import { useGlobalContext } from "./context";

const Search = () => {
  const { query, setQuery, isError } = useGlobalContext();
  return (
    <>
      <section className="h-[18vh] flex flex-col items-center justify-center bg-gray-100/60 p-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Search Your Favourite Movie</h2>
        <form action="#" onSubmit={(e) => e.preventDefault()} className="w-full max-w-md">
          <div className="flex items-center border-b border-b-2 border-indigo-500 py-2">
            <input
              type="text"
              placeholder="Search movie"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="appearance-none bg-transparent border-none w-full text-3xl text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
            />
          </div>
        </form>
        {isError.show && (
          <div className="mt-4">
            <p className="text-red-500 text-center">{isError.msg}</p>
          </div>
        )}
      </section>
    </>
  );
};

export default Search;
