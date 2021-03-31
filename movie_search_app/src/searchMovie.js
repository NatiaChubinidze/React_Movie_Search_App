import React, { useState } from "react";
import MovieCard from "./movieCard.js";
import MovieDetails from "./movieDetails";
import "./style.css";

function SearchMovies() {
  //states- input query, movies
  const [query, setQuery] = useState("");
  //create the state for movies, and update that state appropriate
  const [movies, setMovies] = useState([]);
  const [cardsVisibility, setCardsVisibility] = useState(true);
  const searchMovies = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=be436fb2ad69f1e5f4510f0fe27cd76a&language=en-US&query=${query}&page=1`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };
  function toggleVisibility(value) {
    setCardsVisibility(value);
    console.log("toggle visibility");
  }
  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query">
          Movie Name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="i.e. Jurassic Park"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button btn-success" type="submit">
          Search
        </button>
      </form>
      <div className={cardsVisibility ? "card-list" : "d-none"}>
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard
              movie={movie}
              key={movie.id}
              toggleVisibility={toggleVisibility}
            />
          ))}
      </div>
      <div className={cardsVisibility ? "d-none" : "d-block"}>
        <MovieDetails toggleVisibility={toggleVisibility} />
      </div>
    </>
  );
}

export default SearchMovies;
