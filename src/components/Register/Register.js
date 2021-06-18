import { Link } from 'react-router-dom';
import './Register.css';
import logo from '../../images/login/logo.svg';

function Register({ handleClickRegistr }) {
  return (
    <main className='auth'>
      <div className='auth__container'>
        <Link to='/'>
          <img src={logo} alt='Лого' className='auth__logo'/>
        </Link>
        <h2 className='auth__title'>Добро пожаловать!</h2>
        <form className='auth__form'>
          <label className='auth__label'>Имя</label>
          <input type='text' className='auth__input'/>
          <label className='auth__label'>E-mail</label>
          <input type='email' className='auth__input'/>
          <label className='auth__label'>Пароль</label>
          <input type='password' className='auth__input auth__input_error'/>
          <span className='auth__error'>Что-то пошло не так...</span>
          <button type='submit' className='button auth__submit auth__submit_register' onClick={handleClickRegistr}>Зарегистрироваться</button>
          <p className='auth__registr-text'>
            Уже зарегистрированы? <Link to='/signin' className='link auth__register-link'>Войти</Link>
          </p>
        </form>
      </div>
    </main>
  );
}

export default Register;
