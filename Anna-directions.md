# Movie Search React App

## Set-up Instructions

1. `npm install -g create-react-app`
1. `create-react-app movie-search`
1. `cd movie-search`
1. `npm install ramda`
1. `npm start`

## Steps

### Link to styles

- In `public/index.html`, add link to bulma:
  `<link rel='stylesheet' href='https://unpkg.com/bulma/css/bulma.css'>`

### Set up basic structure of page

- In `src/App.js`, delete everything in the `return()`
- Import ramda's `map` method
- Add `section` with `className='section'`
  - Add `div` with `className='container'`
    - Add `div` with `className='columns'`
      - Add `div` with `className='column'`
        - Add `h1` with `className='title'` containing the text 'Movie Search'
        - Add `form` with `className='form'`
          - Add `div` with `className='field'`
            - Add `label` with `classname='label'` and text "Name:"
            - Add `div` with `className='control'`
              - Add `input` with `type='text'` and `className='input'`
            - Add `div` with `className='help'` and text 'Please enter a name of a movie'
          - Add `div` with `className='field'`
            - Add `button` with `className='button is-primary'` and text 'Search'
      - Add `div` with `className='column'`
        - Add `div` with `className='box'`
          - Add `ul`
            - Add expression to map over `results` using a function called `li` (to be created)

### Add functionality

- Above `return ()`, create `[criteria, setCriteria]` state with default as an empty string
- Assign `criteria` to `input value` and assign forthcoming `handleChange` function to `onChange` property of input
- Create `handleChange` function that takes an event and updates the `criteria` with the `input value`
- Add `onSubmit` event handler `handleSubmit` to `form`
- Create `handleSubmit` function that takes an event and calls the `searchMovies` function, sending results.Search to `results` state variable
  - Don't forget to prevent default
- Create `searchMovies` function that takes `criteria` and returns a `fetch` to `'https://movie-search.jrs.camp?q='` + `encodeURI(criteria)`
  - Use token 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJNb3ZpZSBTZWFyY2giLCJpYXQiOjE0OTg5MDkwMDYsImV4cCI6MTU5MzYwMzQwNiwiYXVkIjoibW92aWUtc2VhcmNoLmpycy5jYW1wIiwic3ViIjoibW92aWUtc2VhcmNoIn0.-U--gAcHA3rmbVIXYN-3fnhC37FuQa4KrXpmZG3D0G8' in the header,
  - Convert response to JSON
- Create another state variable called `results`, setting default to an empty array
- Creation `li` function that takes a movie and returns a `li` with a key value (movie.imdbId) and a movie Title as the text and the poster as an image

### Add validation

- Add `onBlur` event to `input` with function `handleValidation`
- Create `validate` function that takes `criteria`
- Change `className` of `input` to an expression with the `input` class name and a function that returns `is-danger` if field is not valid (is empty) or returns empty if field is valid
  - Create new state variable called `formState` with default set to `valid: true`
- Create `validate` function that checks if `criteria` is empty and sets `formState` state accordingly
- Disable search button if field is empty
