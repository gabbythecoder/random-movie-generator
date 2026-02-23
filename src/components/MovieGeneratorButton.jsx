"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function MovieGeneratorButton({ movies, movieGenres }) {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (movies && movies.length > 0) {
      setMovie(movies[Math.floor(Math.random() * movies.length)]);
    }
  }, [movies]);

  if (!movie) {
    return <p>Loading movies...</p>;
  }

  function getRandomMovie() {
    return movies[Math.floor(Math.random() * movies.length)];
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        className="cursor-pointer border p-1"
        onClick={() => setMovie(getRandomMovie())}
      >
        Generate another movie
      </button>
      <h2>{movie.title}</h2>

      {movie.poster_path && (
        <Image
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
          width={400}
          height={600}
        />
      )}

      <p>{movie.overview}</p>
    </div>
  );
}
