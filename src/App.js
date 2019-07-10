import React, { useState } from 'react'
import Result from './components/Result'
import Form from './components/Form'
import './App.css'

function App() {
  const [results, setResults] = useState([])

  const handleSearch = criteria => {
    searchMovies(criteria).then(res => setResults(res.Search))
  }

  const searchMovies = criteria => {
    return fetch(
      `https://movie-search.jrs.camp?q=${encodeURI(criteria.trim())}`,
      {
        headers: {
          authorization: `Bearer ${token}`
        }
      }
    ).then(response => response.json())
  }

  const token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJNb3ZpZSBTZWFyY2giLCJpYXQiOjE0OTg5MDkwMDYsImV4cCI6MTU5MzYwMzQwNiwiYXVkIjoibW92aWUtc2VhcmNoLmpycy5jYW1wIiwic3ViIjoibW92aWUtc2VhcmNoIn0.-U--gAcHA3rmbVIXYN-3fnhC37FuQa4KrXpmZG3D0G8'

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <h1 className="title">Movie Search</h1>
            <Form onSearch={handleSearch} />
          </div>
          <div className="column">
            <Result movies={results} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default App
