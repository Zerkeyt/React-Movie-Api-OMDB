import React, { useState, useEffect } from 'react';
import Form from './Form.jsx'
import MovieList from './MovieList.jsx'

function MovieAPI() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);

  const getMovies = () => {
    return fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=9d37a7e8&s=${searchTerm}`)
  }

  const handleOnInput = (value) => {
    setSearchTerm(value);
  }

  useEffect(() => {
    getMovies()
      .then(response => response.json())
      .then(data => setMovies(data.Search))
  }, [searchTerm]);

  return (
    <>
      <Form
        handleOnInput={handleOnInput}
        searchTerm={searchTerm}
      />

      {movies?.length > 0 &&
        <MovieList
          movies={movies}
        />
      }
    </>
  )

}

export default MovieAPI;
