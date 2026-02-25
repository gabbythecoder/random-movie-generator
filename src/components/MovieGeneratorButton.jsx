"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import GenreDropdown from "./GenreDropdown";

export default function MovieGeneratorButton({ movies, movieGenres }) {
  const [movie, setMovie] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState("");

  useEffect(() => {
    if (movies && movies.length > 0) {
      setMovie(movies[Math.floor(Math.random() * movies.length)]);
    }
  }, [movies]);

  function getRandomMovie() {
    // filter by genre if selected
    const filteredMovies = selectedGenre
      ? movies.filter((movie) =>
          movie.genre_ids.includes(Number(selectedGenre)),
        )
      : movies;

    if (filteredMovies.length === 0) {
      return null;
    }

    return (
      filteredMovies[Math.floor(Math.random() * filteredMovies.length)] || null
    );
  }

  if (!movie) {
    return <p>Loading movies...</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <GenreDropdown
        genres={movieGenres}
        selectedGenre={selectedGenre}
        onChange={setSelectedGenre}
      />

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
