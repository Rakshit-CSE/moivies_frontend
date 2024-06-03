import React from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const SingleMovie = () => {
  const { id } = useParams();
  const { isLoading, movie, isError } = useFetch(`&i=${id}`);

  const handleAddToFavorites = () => {
    const existingFavorites = localStorage.getItem("favoriteMovies");
    let favoriteMovies = [];

    // If there are existing favorites, parse them from string to array
    if (existingFavorites) {
      favoriteMovies = JSON.parse(existingFavorites);
    }

    // Push the new movie string into the array
    favoriteMovies.push(JSON.stringify(movie));

    // Stringify the updated array and set it back into local storage
    localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies));
  };

  if (isLoading) {
    return (
      <section className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading....</div>
      </section>
    );
  }

  return (
    <section className="container mx-auto p-8">
      <div className="flex gap-14 bg-white/50 p-10 ">
        <figure>
          <img src={movie.Poster} alt={movie.Title} className="rounded-lg h-80vh object-contain" />
        </figure>
        <div className="flex flex-col justify-around">
          <h2 className="text-5xl font-bold mb-4">{movie.Title}</h2>
          <div>

          <p className="text-2xl mb-2"><b>Released:</b> {movie.Released}</p>
          <p className="text-2xl mb-2"><b>Genre:</b> {movie.Genre}</p>
          <p className="text-2xl mb-2"><b>IMDB Rating:</b> {movie.imdbRating} / 10</p>
          <p className="text-2xl mb-2"><b>Country: </b>{movie.Country}</p>
          </div>
          <div className="flex justify-between mt-6">
            <NavLink to="/" className="bg-indigo-500 text-white py-2 px-4 text-2xl rounded-lg hover:bg-indigo-600 transition duration-200">
              Go Back
            </NavLink>
            <button onClick={handleAddToFavorites} className="bg-gray-200 text-gray-700 text-2xl py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-200">
              Add to Favorites
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleMovie;
