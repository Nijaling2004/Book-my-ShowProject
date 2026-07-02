import React from "react";
import { movieData } from "../jun-19/movie";
import MovieCard from "../jun-19/MovieCard";
import Header from "../jun-19/Header";

export default function Movies() {
  return (
    <>
      <Header />
      <div className="movie-list">
        {movieData.map((movie) => (
          <MovieCard movieData={movie} />
        ))}
      </div>
    </>
  );
}
