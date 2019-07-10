import React from 'react';

const Movie = props => {
  return (
    <li key={props.imdbID} className='column is-one-quarter'>
      <div className='card'>
        <div className='card-header'>
          <h2 className='card-header-title'>
            {props.Title} ({props.Year})
          </h2>
        </div>
        <div className='fill'>
          <img alt={props.Title} src={props.Poster} className='card-image' />
        </div>
      </div>
    </li>
  );
};

export default Movie;
