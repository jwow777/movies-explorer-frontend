import { useState } from 'react';
import './MoviesCard.css';
import notSavedIcon from '../../images/movie/not-saved.svg';
import savedIcon from '../../images/movie/saved.svg';
import removeIcon from '../../images/movie/remove.svg';
import thumbnail from '../../images/movie/thumbnail.png';

function MoviesCard({ saved }) {
  const [isMovieSaved, setIsMovieSaved] = useState(false);

  const handleClickSave = () => {
    isMovieSaved ? setIsMovieSaved(false) : setIsMovieSaved(true);
  };

  const handleClickDelete = (e) => e.currentTarget.closest('.movie').remove();

  return (
    <article className='movie'>
      <div className='movie__block'>
        <h2 className='movie__title'>33 слова о дизайне</h2>
        <p className='movie__duration'>1ч 47м</p>
        { saved
            ? (<img src={removeIcon} alt='Удалить' className='button movie__saved' onClick={handleClickDelete}/>)
            : isMovieSaved
              ? (<img src={savedIcon} alt='Сохранено' className='button movie__saved' onClick={handleClickSave}/>)
              : (<img src={notSavedIcon} alt='Не сохранено' className='button movie__saved' onClick={handleClickSave}/>)
        }
      </div>
      <img src={thumbnail} alt='33 слова о дизайне' className='movie__thumbnail'/>
    </article>
  );
}

export default MoviesCard;
