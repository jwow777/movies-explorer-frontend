import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation({ mobileMenu }) {
  return (
    <nav className={`navigation navigation_${mobileMenu ? 'sidebar': 'header'}`}>
      <ul
        className={`list navigation__links navigation__links_${mobileMenu ? 'sidebar': 'header'}`}
      >
        {
          mobileMenu
          ? (
              <li>
                <NavLink
                  exact to='/'
                  className={`link navigation__link navigation__link_${mobileMenu ? 'sidebar': 'header'}`}
                  activeClassName={`navigation__link_${mobileMenu ? 'sidebar': 'header'}_active`}
                >
                  Главная
                </NavLink>
              </li>
            )
          : ''
        }
        <li>
          <NavLink
            to='/movies'
            className={`link navigation__link navigation__link_${mobileMenu ? 'sidebar': 'header'}`}
            activeClassName={`navigation__link_${mobileMenu ? 'sidebar': 'header'}_active`}
          >
            Фильмы
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/saved-movies'
            className={`link navigation__link navigation__link_${mobileMenu ? 'sidebar': 'header'}`}
            activeClassName={`navigation__link_${mobileMenu ? 'sidebar': 'header'}_active`}
          >
            Сохранённые фильмы
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
