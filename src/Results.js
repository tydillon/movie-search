import React from 'react';
import Movie from './Movie';

const Results = ({movies = []}) => {
  return (
    <ul className='columns is-multiline is-centered'>
      {movies.map(movie => (
        <Movie
          imdbID={movie.imdbID}
          Title={movie.Title}
          Poster={movie.Poster}
          Year={movie.Year}
        />
      ))}
    </ul>
  );
};

export default Results;
