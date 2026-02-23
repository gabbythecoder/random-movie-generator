import { fetchMovies } from "@/lib/tmdb";
import { fetchMovieGenres } from "@/lib/tmdb-movie-genre";
import MovieGeneratorButton from "@/components/MovieGeneratorButton";

export default async function HomePage() {
  const movies = await fetchMovies();
  const movieGenres = await fetchMovieGenres();

  return (
    <div className="flex flex-col w-full">
      <section className="min-h-screen flex flex-col items-center justify-center">
        <h1>What movie to watch?</h1>

        <MovieGeneratorButton movies={movies} />
      </section>
    </div>
  );
}
