import AccountButton from '../AccountButton/AccountButton';
import Navigation from '../Navigation/Navigation';
import './MobileMenu.css';
import close from '../../images/sidebar/close.svg';

function MobileMenu({isOpenSidebar, handleClickCloseSidebar}) {
  return (
    <div className={`sidebar${isOpenSidebar ? ' sidebar__opened' : ''}`}>
      <div className='sidebar__container'>
        <button type='button' className='button sidebar__close'>
          <img src={close} alt='Закрыть' className='sidebar__close-icon' onClick={handleClickCloseSidebar}/>
        </button>
        <Navigation mobileMenu={true}/>
        <AccountButton mobileMenu={true}/>
      </div>
    </div>
  );
}

export default MobileMenu;