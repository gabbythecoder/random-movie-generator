"use client";

export default function GenreDropdown({
  genres = [],
  selectedGenre,
  onChange,
}) {
  return (
    <div>
      <label>Filter by genres:</label>
      <select
        value={selectedGenre}
        onChange={(event) => onChange(event.target.value)}
      >
        <option value="">All Genres</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  );
}
