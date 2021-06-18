import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ saved }) {
  return (
    <section className='movies-list'>
      <div className='movies-list__container'>
        <MoviesCard saved={saved}/>
        <MoviesCard saved={saved}/>
        <MoviesCard saved={saved}/>
        <MoviesCard saved={saved}/>
        <MoviesCard saved={saved}/>
        <MoviesCard saved={saved}/>
      </div>
    </section>
  );
}

export default MoviesCardList;
