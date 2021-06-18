import { Link } from 'react-router-dom';
import AccountButton from '../AccountButton/AccountButton';
import Navigation from '../Navigation/Navigation';
import './Header.css';
import logo from '../../images/header/logo.svg';
import burger from '../../images/header/burger.svg';

function Header({ isLoggedIn, handleClickSidebar }) {
  return (
    <header className='header'>
      <Link to='/' className='link header__logo-link'>
        <img src={logo} alt='Лого' className='header__logo'/>
      </Link>
      {
        isLoggedIn
          ? (
              <>
                <Navigation mobileMenu={false}/>
                <div className='header__block header__block_login'>
                  <AccountButton />
                  <button className='button header__menu'>
                    <img src={burger} alt='Меню' className='header__menu-icon' onClick={handleClickSidebar}/>
                  </button>
                </div>
              </>
            )
          : (
              <div className='header__block header__block_nologin'>
                <Link to='/signup' className='link header__link'>Регистрация</Link>
                <Link to='/signin'>
                  <button className='button header__link header__login'>Войти</button>
                </Link>
              </div>
            )
      }
    </header>
  );
}

export default Header;
