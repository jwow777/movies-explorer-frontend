import { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import MoreContent from '../MoreContent/MoreContent';
import { useWindowWidthSettings } from "../../utils/hooks";
import './Movies.css';

function Movies({ state, setState, handleClickSaveMovie, handleClickRemoveSavedMovie, isLoading, setIsLoading }) {
  const [moviesArray, setMoviesArray] = useState([]);
  useEffect(() => {
    if (!state.movieSearchSubmitClick) {
      return setMoviesArray(state.movieList);
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
    if (windowWidth > 1024) {
      setState({ ...state, numberMovies: 12, addNumberMovies: 3 })
    } else if (windowWidth > 666) {
      setState({ ...state, numberMovies: 8, addNumberMovies: 2 })
    } else {
      setState({ ...state, numberMovies: 5, addNumberMovies: 2 })
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
