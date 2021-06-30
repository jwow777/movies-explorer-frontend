import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ moviesArray, state, saved, handleClickSaveMovie, handleClickRemoveSavedMovie }) {
  return (
    <section className='movies-list'>
      <div className='movies-list__container'>
        { 
          moviesArray.slice(0, state.numberMovies)
            .map((item) => 
              <MoviesCard
                item={item}
                state={state}
                saved={saved}
                handleClickSaveMovie={handleClickSaveMovie}
                handleClickRemoveSavedMovie={handleClickRemoveSavedMovie}
                key={item._id || item.id}
              />)     
        }
      </div>
    </section>
  );
}

export default MoviesCardList;
