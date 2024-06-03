import React from "react";
import { Link } from "react-router-dom";

const FavoritesPage = () => {
  // Retrieve the favorite movies array from local storage
  const favoriteMoviesString = localStorage.getItem("favoriteMovies");

  // Parse the array from a string into a JavaScript object
  const favoriteMovies = favoriteMoviesString ? JSON.parse(favoriteMoviesString) : [];

  return (
    <section className="container mx-auto py-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {favoriteMovies.map((movieString, index) => {
          const movie = JSON.parse(movieString);
          return (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <figure>
                <img src={movie.Poster} alt={movie.Title} className="w-full h-64 object-cover" />
              </figure>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{movie.Title}</h2>
                <p className="text-sm mb-1">Released: {movie.Released}</p>
                <p className="text-sm mb-1">Genre: {movie.Genre}</p>
                <p className="text-sm mb-1">IMDB Rating: {movie.imdbRating} / 10</p>
                <p className="text-sm mb-1">Country: {movie.Country}</p>
                <Link to="/" className="text-indigo-500 hover:text-indigo-700">
                  Go Back
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FavoritesPage;
