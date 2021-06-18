import './Portfolio.css';

function Portfolio() {
  return (
    <div className='portfolio'>
      <h3 className='portfolio__title'>Портфолио</h3>
      <ul className='list'>
        <li className='portfolio__item'>
          <a href='https://github.com/jwow777/how-to-learn' target='_blank' rel='noreferrer' className='link portfolio__link'>Статичный сайт</a>
        </li>
        <li className='portfolio__item'>
          <a href='https://jwow777.github.io/russian-travel-react/' target='_blank' rel='noreferrer' className='link portfolio__link'>Адаптивный сайт</a>
        </li>
        <li className='portfolio__item'>
          <a href='https://jwow777.github.io/react-mesto-auth/' target='_blank' rel='noreferrer' className='link portfolio__link'>Одностраничное приложение</a>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
