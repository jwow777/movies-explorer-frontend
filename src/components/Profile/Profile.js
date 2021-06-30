import './Profile.css';

function Profile({ handleClickLogout }) {
  const handleSubmit = (e) => e.preventDefault();
  return (
    <main className='profile'>
      <h2 className='profile__title'>Привет, Виталий!</h2>
      <form className='profile__form'>
        <label className='profile__label' htmlFor='profile-name'>Имя</label>
        <input type='text' className='profile__input' id='profile-name'/>
        <span className='profile__diviner'></span>
        <label className='profile__label' htmlFor='profile-email'>E-mail</label>
        <input type='email' className='profile__input' id='profile-email'/>
        <button type='submit' className='button profile__link profile__link_submit' onClick={handleSubmit}>Редактировать</button>
        <button type='button' className='button profile__link profile__link_logout' onClick={handleClickLogout}>Выйти из аккаунта</button>
      </form>
    </main>
  );
}

export default Profile;
