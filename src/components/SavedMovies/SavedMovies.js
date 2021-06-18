import { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import MoreContent from '../MoreContent/MoreContent';
import './SavedMovies.css';

function SavedMovies() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loadingTimeout = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(loadingTimeout);
  }, []);
  return (
    <main className='movies'>
      <div className='movies__container'>
        <SearchForm />
        { isLoading
          ? <Preloader />
          : (
              <>
                <MoviesCardList/>
                <MoreContent />
              </>
            )
        }
      </div>
    </main>
  );
}

export default SavedMovies;