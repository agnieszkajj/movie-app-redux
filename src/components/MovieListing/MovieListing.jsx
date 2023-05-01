import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import { useSelector } from "react-redux";
import "./MovieListing.css";

const MovieListing = () => {
  const { movies, shows } = useSelector((state) => state.movies);
  console.log(shows);

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          {movies.Response === "True" ? (
            movies.Search.map((movie, index) => {
              return <MovieCard key={index} {...movie}></MovieCard>;
            })
          ) : (
            <div className="movies-error">
              <h3>{movies.Error}</h3>
            </div>
          )}
        </div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">
          {shows.Response === "True" ? (
            shows.Search.map((show, index) => {
              return <MovieCard key={index} {...show}></MovieCard>;
            })
          ) : (
            <div className="shows-error">
              <h3>{shows.Error}</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
