import { Link } from 'react-router-dom';
import './AccountButton.css';

function AccountButton({ mobileMenu }) {
  return (
    <Link to='/profile' className={`account__link ${mobileMenu ? 'account__link_sidebar' : 'account__link_header'}`}>
      <button className={`button account__button`}>Аккаунт</button>
    </Link>
  );
}

export default AccountButton;
