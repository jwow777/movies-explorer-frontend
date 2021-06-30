import { Link } from 'react-router-dom';
import './Login.css';
import logo from '../../images/login/logo.svg';

function Login({ handleClickLogin }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleClickLogin();
  };
  return (
    <main className='auth'>
      <div className='auth__container'>
        <Link to='/'>
          <img src={logo} alt='Лого' className='auth__logo'/>
        </Link>
        <h2 className='auth__title'>Рады видеть!</h2>
        <form className='auth__form'>
          <label className='auth__label'>E-mail</label>
          <input type='email' className='auth__input'/>
          <label className='auth__label'>Пароль</label>
          <input type='password' className='auth__input auth__input_error'/>
          <span className='auth__error'>Что-то пошло не так...</span>
          <button type='submit' className='button auth__submit' onClick={handleSubmit}>Войти</button>
          <p className='auth__registr-text'>
            Ещё не зарегистрированы? <Link to='/signup' className='link auth__register-link'>Регистрация</Link>
          </p>
        </form>
      </div>
    </main>
  );
}

export default Login;
