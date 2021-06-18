import { useHistory } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  const history = useHistory();
  return (
    <main className='not-found'>
      <h1 className='not-found__title'>404</h1>
      <p className='not-found__subtitle'>Страница не найдена</p>
      <button onClick={() => history.goBack()} className='button not-found__link'>Назад</button>
    </main>
  );
}

export default NotFound;
