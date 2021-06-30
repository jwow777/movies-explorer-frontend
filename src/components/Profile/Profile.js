import { useContext, useEffect } from 'react';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import './Profile.css';

function Profile({ handleEditProfile, handleClickLogout, useFormWithValidation, errorText, successText }) {
  const currentUser = useContext(CurrentUserContext);
  const { values, errors, isValid, handleChange, setValues } = useFormWithValidation({});

  useEffect(() => setValues({
    ...values,
    name: currentUser.name,
    email: currentUser.email,
  }), [currentUser])

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditProfile(values);
  };
  
  return (
    <main className='profile'>
      <h2 className='profile__title'>Привет, {currentUser.name}!</h2>
      <form className='profile__form'>
        <label
          className={`profile__label${errors.name ? ' profile__label_error' : ''}`}
          htmlFor='profile-name'
        >
          Имя
        </label>
        <input
          type='text'
          id='profile-name'
          className='profile__input'
          name='name'
          value={values.name || ''}
          onChange={handleChange}
          required
          minLength={2}
          maxLength={30}
        />
        <span className='profile__diviner'></span>
        <label
          className={`profile__label${errors.email ? ' profile__label_error' : ''}`}
          htmlFor='profile-email'
        >
          E-mail
        </label>
        <input
          type='email'
          id='profile-email'
          className='profile__input'
          name='email'
          value={values.email || ''}
          onChange={handleChange}
          required
        />
        <div className='profile__submit-block'>
          {
            errors.name || errors.email || errorText
            ? <span className='profile__error'>{errors.name || errors.email || errorText}</span>
            : ''
          }
          {
            successText
            ? <span className='profile__success'>Успешно</span>
            : ''
          }
          <button
            type='submit'
            className='button profile__link profile__link_submit'
            onClick={handleSubmit}
            disabled={!isValid}
          >
            Редактировать
          </button>
          <button
            type='button'
            className='button profile__link profile__link_logout'
            onClick={handleClickLogout}
          >
            Выйти из аккаунта
          </button>          
        </div>
      </form>
    </main>
  );
}

export default Profile;
