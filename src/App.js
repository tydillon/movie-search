import React, { useState } from 'react'
import { map } from 'ramda'
import './App.css'

function App() {
  const [criteria, setCriteria] = useState('')
  const [results, setResults] = useState([])

  const handleChange = e => {
    setCriteria(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    searchMovies(criteria).then(res => setResults(res.Search))
  }

  const searchMovies = criteria => {
    return fetch(`https://movie-search.jrs.camp?q=${encodeURI(criteria)}`, {
      headers: {
        authorization: `Bearer ${token}`
      }
    }).then(response => response.json())
  }

  const token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJNb3ZpZSBTZWFyY2giLCJpYXQiOjE0OTg5MDkwMDYsImV4cCI6MTU5MzYwMzQwNiwiYXVkIjoibW92aWUtc2VhcmNoLmpycy5jYW1wIiwic3ViIjoibW92aWUtc2VhcmNoIn0.-U--gAcHA3rmbVIXYN-3fnhC37FuQa4KrXpmZG3D0G8'

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <h1 className="title">Movie Search</h1>
            <form className="form" onSubmit={handleSubmit}>
              <div className="field">
                <label className="label">Name:</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    onChange={handleChange}
                  />
                </div>
                <div className="help">Please enter the name of a movie</div>
              </div>
              <div className="field">
                <button className="button is-primary">Search</button>
              </div>
            </form>
          </div>
          <div className="column">
            <div className="box">
              <ul>{/* {map(li, results)} */}</ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const li = movie => {
  return <li key={movie.imdbId}>{movie.Title}</li>
}

export default App
