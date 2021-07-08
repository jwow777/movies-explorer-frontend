import { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import MoreContent from '../MoreContent/MoreContent';
import { useWindowWidthSettings } from "../../utils/hooks";
import { MORE_BUTTON_TOP_WIDTH_THRESHOLD, MORE_BUTTON_BOTTOM_WIDTH_THRESHOLD, MORE_BUTTON_RESOLUTION_SETTINGS } from "../../utils/constants";
import './Movies.css';

function Movies({ state, setState, handleClickSaveMovie, handleClickRemoveSavedMovie, isLoading, setIsLoading }) {
  const [moviesArray, setMoviesArray] = useState([]);
  useEffect(() => {
    if (!state.movieSearchSubmitClick) {
      if (localStorage.filteredMoviesList) {
        return setMoviesArray(JSON.parse(localStorage.filteredMoviesList));
      } else {
        return setMoviesArray(state.movieList);
      }
    } else {
      if (state.filteredMoviesList.length !== 0 && state.movieSearch.length !== '') {
        return setMoviesArray(state.filteredMoviesList)
      } else {
        return setMoviesArray([])
      }
    }
  }, [state.movieSearchSubmitClick, state.filteredMoviesList, state.movieList, state.movieSearch.length])

  const windowWidth = useWindowWidthSettings();
  useEffect(() => {
    if (windowWidth > MORE_BUTTON_TOP_WIDTH_THRESHOLD) {
      setState({ ...state, numberMovies: MORE_BUTTON_RESOLUTION_SETTINGS.big.default, addNumberMovies: MORE_BUTTON_RESOLUTION_SETTINGS.big.grow })
    } else if (windowWidth > MORE_BUTTON_BOTTOM_WIDTH_THRESHOLD) {
      setState({ ...state, numberMovies: MORE_BUTTON_RESOLUTION_SETTINGS.medium.default, addNumberMovies: MORE_BUTTON_RESOLUTION_SETTINGS.medium.grow })
    } else {
      setState({ ...state, numberMovies: MORE_BUTTON_RESOLUTION_SETTINGS.small.default, addNumberMovies: MORE_BUTTON_RESOLUTION_SETTINGS.small.grow })
    }
  }, [windowWidth]);

  const handleAddMovies = () => setState({ ...state, numberMovies: state.numberMovies + state.addNumberMovies });

  return (
    <main className='movies'>
      <div className='movies__container'>
        <SearchForm
          state={state}
          setState={setState}
        />
        { isLoading
          ? <Preloader />
          : (
              <>
                {
                  moviesArray.length > 0
                  ? <MoviesCardList
                      moviesArray={moviesArray}
                      state={state}
                      setState={setState}
                      handleClickSaveMovie={handleClickSaveMovie}
                      handleClickRemoveSavedMovie={handleClickRemoveSavedMovie}
                    />
                  : <p className='movies__not-found'>Ничего нет</p>
                }
                {
                  moviesArray.length <= state.numberMovies 
                  ? ''
                  : <MoreContent handleAddMovies={handleAddMovies} />
                }
              </>
            )
        }
      </div>
    </main>
  );
}

export default Movies;
