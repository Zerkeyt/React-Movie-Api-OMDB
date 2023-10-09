import React from 'react';
import Movie from './Movie.jsx'

function MovieList(props) {
  return (
    <div className='movielist'>
      {props?.movies?.map((movie, index) => {
        return (
          <Movie
            key={index}
            movie={movie}
          />
        )
      })}
    </div>
  )
}

export default MovieList;
