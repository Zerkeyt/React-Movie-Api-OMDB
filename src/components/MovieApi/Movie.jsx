import React from 'react'

function Movie(props) {
  return (<div className="movie">
    <img
      className="movie__img"
      src={props.movie.Poster}
    />
    <p className="movie__title">Filmtitel: {props.movie.Title}</p>
    <p className="movie__year">Årtal: {props.movie.Year}</p>
    <p className="movie__type">Filmtyp: {props.movie.Type}</p>
  </div>)
}

export default Movie;
