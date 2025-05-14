import MovieCard from "../components/MovieCard";

function Home() {
  const movies = [
    { id: 1, title: "Test 1", release_date: "2020" },
    { id: 2, title: "Test 2", release_date: "2020" },
    { id: 3, title: "Test 3", release_date: "2020" },
  ];

  const handleSearch = () => {};

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
