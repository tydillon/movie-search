import React from 'react'
import { map } from 'ramda'

function Result({ movies }) {
  const li = movie => {
    return (
      <li key={movie.imdbID}>
        {movie.Title}
        <img alt="movie poster" src={movie.Poster} />
      </li>
    )
  }

  return (
    <div className="box">
      <ul>{map(li, movies)}</ul>
    </div>
  )
}

export default Result
