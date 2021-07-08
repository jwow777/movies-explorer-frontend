import { Link } from 'react-router-dom';
import './Register.css';
import logo from '../../images/login/logo.svg';

function Register({ state, handleClickRegistr, useFormWithValidation, errorText }) {
  const { values, errors, isValid, handleChange } = useFormWithValidation({});
  const handleSubmit = (e) => {
    e.preventDefault();
    handleClickRegistr(values);
  };
  return (
    <main className='auth'>
      <div className='auth__container'>
        <Link to='/'>
          <img src={logo} alt='Лого' className='auth__logo'/>
        </Link>
        <h2 className='auth__title'>Добро пожаловать!</h2>
        <form className='auth__form' onSubmit={handleSubmit}>
          <label className='auth__label' htmlFor='auth__name'>Имя</label>
          <input
            type='text'
            id='auth__name'
            className={`auth__input${errors.email ? ' auth__input_error' : ''}`}
            name='name'
            value={values.name || ''}
            onChange={handleChange}
            disabled={state.disableInputs}
            required
            minLength={2}
            maxLength={30}
          />
          {
            errors.name
            ? <span className='auth__error auth__error_input'>{errors.name}</span>
            : ''
          }
          <label className='auth__label' htmlFor='auth__email'>E-mail</label>
          <input
            type='email'
            id='auth__email'
            className={`auth__input${errors.email ? ' auth__input_error' : ''}`}
            name='email'
            value={values.email || ''}
            onChange={handleChange}
            disabled={state.disableInputs}
            required
          />
          {
            errors.email
            ? <span className='auth__error auth__error_input'>{errors.email}</span>
            : ''
          }
          <label className='auth__label' htmlFor='auth__password'>Пароль</label>
          <input
            type='password'
            id='auth__password'
            className={`auth__input${errors.password ? ' auth__input_error' : ''}`}
            name='password'
            value={values.password || ''}
            onChange={handleChange}
            disabled={state.disableInputs}
            required
          />
          {
            errors.password
            ? <span className='auth__error auth__error_input'>{errors.password}</span>
            : ''
          }
          <div className='auth__submit-block'>
            {
              errorText
              ? <span className='auth__error auth__error_submit'>{errorText}</span>
              : ''
            }
            <button
              type='submit'
              className='button auth__submit'
              onClick={handleSubmit}
              disabled={!isValid || state.disableInputs}
            >
              Зарегистрироваться
            </button>
            <p className='auth__registr-text'>
              Уже зарегистрированы? <Link to='/signin' className='link auth__register-link'>Войти</Link>
            </p>            
          </div>
        </form>
      </div>
    </main>
  );
}

export default Register;
