# React Movie Search Steps

## Setup

- create-react-app
- npm install ramda
- npm install bulma
- npm run start start to make sure it runs
- clear unneccesary things in app.js

## Make the form

- contain everything in a section (class section)
- set up a flexbox container system. use class container to contain title and form
- Add title
- Create a form. (use class form)
- div to wrap the form field (use class field)
- Label and input for the movie name (use classes label, control, input. control is a div that wraps the input)
- Div to contain instructions underneath the input (use class help)
- Make a second field to contain a button (use class field)
- Make a search button (use classes button, is-primary) and set type to submit

## Set up state with hooks

- Set a new array equal to useState(defaultvalue). First value in array is the variable to hold state, second is a function used to set the state
- Set value of input to critera and set onChange of input to a function called handleChange
- write a function called handleChange. Within that function, use the state-setting function and invoke it with the value from the input (you can check if it's working with react developer tools)

## Capture submit event to the form

- Within the form tag, add an onSubmit and set it equal to a function called handleSubmit
- Make the handleSubmit function. It will call the api with criteria to get a list of movies
- Make sure to prevent default within the handle submit function
- Make a searchMovies function. Takes the criteria state and performs a fetch at this address - https://movie-search.jrs.camp?q= encodeURI(criteria)
- Add authorization key in the headers of the fetch, as an object for a second parameter

```js
const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJNb3ZpZSBTZWFyY2giLCJpYXQiOjE0OTg5MDkwMDYsImV4cCI6MTU5MzYwMzQwNiwiYXVkIjoibW92aWUtc2VhcmNoLmpycy5jYW1wIiwic3ViIjoibW92aWUtc2VhcmNoIn0.-U--gAcHA3rmbVIXYN-3fnhC37FuQa4KrXpmZG3D0G8'

headers: {
  authorization: 'Bearer ' + token
}
```

- Convert response to JSON
- Within the handleSubmit function, call the searchMovie function with the criteria.
- .then console log the results to make sure it worked

## Display the movie info

- Within the app function, make another hook for the results. Default is an empty array
- Back in the handleSubmit function, run the setter function for the results, pass in the result.Search
- Make a new div under the button with the class box.
- Make a ul
- Import map from ramda
- Map over the results with the function li
- Write function li that takes a movie and returns an li element with a key and displays the movie name and poster

## Styling with bulma

- Under the container, wrap the whole thing in a div with class 'columns'
- Wrap the search form in another div with the class 'column'
- Wrap the results in a div with the class 'column'

## Form validation

- within the input, add an onBlur with a function handleValidation
- add a class to the input that runs a function called checkValid
- make the checkValid function. if invalid, return is-danger, otherwise, return an empty string
- make another hook to check whether or not the form is valid. default value is true
- make the handleValidation function. if criteria(to lowercase) is bad, run the setter function and set invalid to true, else set it to false
