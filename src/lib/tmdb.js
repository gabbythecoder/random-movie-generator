export async function fetchMovies() {
  const response = await fetch("https://api.themoviedb.org/3/movie/popular", {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
    },
  });

  const data = await response.json();
  //   console.log(data);
  return data.results;
}
