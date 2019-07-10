import React, { useState } from 'react'

export default Form

function Form({ onSearch }) {
  const [buttonVal, setButtonVal] = useState(true)
  const [valid, setValid] = useState(true)
  const [criteria, setCriteria] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    onSearch(criteria)
  }

  const checkValid = () => {
    if (!valid) {
      return 'is-danger'
    } else {
      return ''
    }
  }

  const handleChange = e => {
    setCriteria(e.target.value)
    if (!criteria.trim().length) {
      setButtonVal(true)
    } else {
      setButtonVal(false)
    }
  }

  const handleValidation = () => {
    if (!criteria.trim().length) {
      setValid(false)
      setButtonVal(true)
    } else {
      setValid(true)
      setButtonVal(false)
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Name:</label>
        <div className="control">
          <input
            type="text"
            className={`input ${checkValid()}`}
            onChange={handleChange}
            onBlur={handleValidation}
          />
        </div>
        <div className="help">Please enter the name of a movie</div>
      </div>
      <div className="field">
        <button disabled={buttonVal} className="button is-primary">
          Search
        </button>
      </div>
    </form>
  )
}
