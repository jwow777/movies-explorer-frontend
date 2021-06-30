import { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import './SavedMovies.css';

function SavedMovies({ state, setState, handleClickRemoveSavedMovie, isLoading }) {
  const [moviesArray, setMoviesArray] = useState([]);
  useEffect(() => {
    if (!state.movieSavedSearchSubmitClick) {
      setMoviesArray(state.savedMovieList);
    } else {
      if (state.filteredSavedMovieList.length !== 0 && state.savedMovieSearch.length !== '') {
        setMoviesArray(state.filteredSavedMovieList)
      } else {
        return setMoviesArray([])
      }
    }
  }, [state.movieSavedSearchSubmitClick, state.filteredSavedMovieList, state.savedMovieList, state.savedMovieSearch.length])

  return (
    <main className='movies'>
      <div className='movies__container'>
        <SearchForm
          state={state}
          setState={setState}
          saved={true}
        />
        { isLoading
          ? <Preloader />
          : (
              moviesArray.length > 0
              ? <MoviesCardList
                  moviesArray={moviesArray}
                  state={state}
                  setState={setState}
                  saved={true}
                  handleClickRemoveSavedMovie={handleClickRemoveSavedMovie}
                />
              : <p className='movies__not-found'>Ничего нет</p>
            )
        }
      </div>
    </main>
  );
}

export default SavedMovies;