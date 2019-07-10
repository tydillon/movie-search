import React from 'react'
import { map } from 'ramda'
import './App.css'

function App() {
  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <h1 className="title">Movie Search</h1>
            <form className="form">
              <div className="field">
                <label className="label">Name:</label>
                <div className="control">
                  <input type="text" className="input" />
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

export default App
