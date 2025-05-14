import MovieCard from "../components/MovieCard";

function Home() {
  const movies = [
    { id: 1, title: "Test 1", release_date: "2020" },
    { id: 2, title: "Test 2", release_date: "2020" },
    { id: 3, title: "Test 3", release_date: "2020" },
  ];

  return (
    <div className="home">
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
