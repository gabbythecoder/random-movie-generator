export async function fetchMovieGenres() {
  const response = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list",
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
      },
    },
  );

  const data = await response.json();
    // console.log(data);
  return data.genres;
}
