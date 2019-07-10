import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Results from './Results';

function App() {
  const [criteria, setCriteria] = useState('');
  const [results, setResults] = useState([]);

  const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
  }));

  const classes = useStyles();

  const handleChange = e => {
    setCriteria(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (criteria.replace(/^[ \t]+|[ \t]+$/g, '').length !== 0) {
      searchMovies(criteria).then(res => setResults(res));
    }
  };

  const token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJNb3ZpZSBTZWFyY2giLCJpYXQiOjE0OTg5MDkwMDYsImV4cCI6MTU5MzYwMzQwNiwiYXVkIjoibW92aWUtc2VhcmNoLmpycy5jYW1wIiwic3ViIjoibW92aWUtc2VhcmNoIn0.-U--gAcHA3rmbVIXYN-3fnhC37FuQa4KrXpmZG3D0G8';

  const searchMovies = async criteria => {
    const response = await fetch(
      `https://movie-search.jrs.camp?q=${encodeURI(criteria.trim())}`,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    const responseJson = await response.json();
    return responseJson.Search.filter(movie => movie.Type === 'movie');
  };

  return (
    <div>
      <section className='section'>
        <div className='container columns is-centered'>
          <div className='column'>
            <form className='form' onSubmit={handleSubmit}>
              <TextField
                inputProps={{style: {textAlign: 'center'}}}
                className={classes.textField}
                value={criteria}
                onChange={handleChange}
                placeholder='Enter a movie title'
                margin='normal'
              />
            </form>
          </div>
        </div>
      </section>

      <section>
        <div className='container'>
          <Results movies={results} />
        </div>
      </section>
    </div>
  );
}

export default App;
