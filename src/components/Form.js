import React, { useState } from 'react'
import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxPopover
} from '@reach/combobox'
import { map } from 'ramda'
export default Form

function Form({ onSearch, movies }) {
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

  const makeDropdown = movie => {
    return <ComboboxOption value={movie.Title} key={movie.imdbID} />
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Name:</label>
        <Combobox>
          <div className="control">
            <ComboboxInput
              aria-labelledby="demo"
              type="text"
              className={`input ${checkValid()}`}
              onChange={handleChange}
              onBlur={handleValidation}
              style={{ width: '80%' }}
            />
            <button disabled={buttonVal} className="button is-primary">
              Search
            </button>
          </div>
          <ComboboxPopover>
            <ComboboxList aria-labelledby="demo">
              {map(makeDropdown, movies)}
            </ComboboxList>
          </ComboboxPopover>
        </Combobox>

        <div className="help">Please enter the name of a movie</div>
      </div>
    </form>
  )
}
