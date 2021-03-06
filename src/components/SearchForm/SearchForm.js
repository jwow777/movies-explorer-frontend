import { useState } from 'react';
import { SHORT_MOVIE_DURATION } from '../../utils/constants';
import './SearchForm.css';

function SearchForm({ state, setState, saved }) {
  const [stateCheckbox, setStateCheckbox] = useState(false);

  const handleFilter = (movieList, movieSearch) => {
    const filtered = movieList.nameRU
      .toLowerCase()
      .includes(movieSearch.toLowerCase());
    return filtered;
  };

  const filteringMoviesArray = (movieList, searchValue) => {
    if (stateCheckbox) {
      const shortMovie = movieList.filter((movie) => movie.duration <= SHORT_MOVIE_DURATION && handleFilter(movie, searchValue));
      return shortMovie;
    } else {
      const filteredMovies = movieList.filter((movie) => handleFilter(movie, searchValue));
      return filteredMovies;
    }
  };
  
  const handleChange = (e) => {
    if (saved) {
      setState({ ...state, savedMovieSearch: e.target.value });      
    } else {
      setState({ ...state, movieSearch: e.target.value });     
    }
  };

  const handleChangeReplicaCheckbox = () => setStateCheckbox(!stateCheckbox);

  const handleSubmit = (e) => {
    e.preventDefault()
    if (saved) {
      setState({ ...state, savedMovieSearch: e.target.value });   
      const filteredSavedMoviesArray = filteringMoviesArray(state.savedMovieList, state.savedMovieSearch);
      setState({
        ...state,
        filteredSavedMovieList: filteredSavedMoviesArray,
        movieSavedSearchSubmitClick: true,
      }); 
      localStorage.setItem('filteredSavedMovieList', JSON.stringify(filteredSavedMoviesArray));
    } else {
      setState({ ...state, movieSearch: e.target.value });   
      const filteredMoviesArray = filteringMoviesArray(state.movieList, state.movieSearch);
      setState({
        ...state,
        filteredMoviesList: filteredMoviesArray,
        movieSearchSubmitClick: true,
      });
      localStorage.setItem('filteredMoviesList', JSON.stringify(filteredMoviesArray));
    }
  };

  return (
    <form className='search'>
      <fieldset className='search__fieldset'>
        <input
          type='text'
          className='search__input'
          name='search'
          placeholder='??????????'
          required
          value={saved ? state.savedMovieSearch : state.movieSearch}
          onChange={handleChange}
        />
        <button className='button search__submit' onClick={handleSubmit}>??????????</button>
      </fieldset>
      <div className='button search__switch'>
        <span className='search__switch-checkbox'>
          <input
            type='checkbox'
            className='search__switch-input'
            name='checkbox'
            checked={stateCheckbox}
            onChange={handleChange}
          />
          <span className='search__switch-checkbox-replica' onClick={handleChangeReplicaCheckbox}>
            <span className='search__switch-checkbox-knob'></span>
          </span>
        </span>
        <p className='search__switch-text'>??????????????????????????????</p>
      </div>
    </form>
  );
}

export default SearchForm;
