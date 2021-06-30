import './MoviesCard.css';
import notSavedIcon from '../../images/movie/not-saved.svg';
import savedIcon from '../../images/movie/saved.svg';
import removeIcon from '../../images/movie/remove.svg';

function MoviesCard({ item, state, saved, handleClickSaveMovie, handleClickRemoveSavedMovie }) {
  const isMovieSaved = state.savedMovieList.some((movieData) => movieData.nameRU === item.nameRU);
  const handleClickDelete = () => handleClickRemoveSavedMovie(item);

  const handleClickSave = () => {
    if (isMovieSaved) { 
      const movieIdForDelete = state.savedMovieList.find((movieData) => 
        (movieData.nameRU === item.nameRU) ? movieData : ''
      );
      handleClickRemoveSavedMovie(movieIdForDelete);
    } else {
      const API_MOVIES_BASE_URL = 'https://api.nomoreparties.co';
      const movieData = {
        country: item.country,
        director: item.director,
        duration: item.duration,
        year: item.year,
        description: item.description,
        image: `${API_MOVIES_BASE_URL}${item.image.url}`,
        trailer: item.trailerLink,
        thumbnail: `${API_MOVIES_BASE_URL}${item.image.formats.thumbnail.url}`,
        movieId: item.id,
        nameRU: item.nameRU,
        nameEN: item.nameEN,
      };
      handleClickSaveMovie(movieData)
    };
  };

  const handleChangeTime = (time) => 
    (time < 60)
      ? time + 'м'
      : Math.floor(time / 60) + ' ч ' + (time % 60) + ' м';

  return (
    <article className='movie'>
      <div className='movie__block'>
        <h2 className='movie__title'>{item.nameRU}</h2>
        <p className='movie__duration'>{handleChangeTime(item.duration)}</p>
        { saved
            ? (<img src={removeIcon} alt='Удалить' className='button movie__saved' onClick={handleClickDelete}/>)
            : isMovieSaved
              ? (<img src={savedIcon} alt='Сохранено' className='button movie__saved' onClick={handleClickSave}/>)
              : (<img src={notSavedIcon} alt='Не сохранено' className='button movie__saved' onClick={handleClickSave}/>)
        }
      </div>
      <a href={item.trailerLink} target='_blank' rel='noreferrer' className='movie__trailer'>
        <img src={item.image.url ? `https://api.nomoreparties.co${item.image.url}` : item.image} alt={item.nameRU} className='movie__thumbnail'/>
      </a>
    </article>
  );
}

export default MoviesCard;
