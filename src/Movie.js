import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./context";

const imgUrl = "https://via.placeholder.com/200/200";

const Movie = () => {
  const { movie, isLoading } = useGlobalContext();

  if (isLoading) {
    return <div className="text-center text-xl font-semibold mt-20">Loading...</div>;
  }

  return (
    <>
      <section className="py-8 ">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12 px-24 py-5">
          {movie
            ? movie.map((curMovieElem) => {
                const { imdbID, Title, Poster } = curMovieElem;
                const movieName = Title.substring(0, 15);

                return (
                  <NavLink
                    to={`movie/${imdbID}`}
                    key={imdbID}
                    className="block transform hover:scale-105 transition-transform duration-300"
                  >
                    <div className="bg-transparent border border-[rgba(255,180,66,0.5)] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                      <img
                        className="w-full h-64 object-cover"
                        src={Poster === "N/A" ? imgUrl : Poster}
                        alt={Title}
                      />
                      <div className="p-4 bg-[rgb(255,180,66)] bg-opacity-80">
                        <h2 className="text-lg font-semibold text-gray-800">
                          {movieName.length > 13 ? `${movieName}...` : movieName}
                        </h2>
                      </div>
                    </div>
                  </NavLink>
                );
              })
            : ""}
        </div>
      </section>
    </>
  );
};

export default Movie;
