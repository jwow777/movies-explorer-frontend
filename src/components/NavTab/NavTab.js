import './NavTab.css';

function NavTab() {
  return (
    <nav className='nav-tab'>
      <ul className='nav-tab__list'>
        <li>
          <a href='#project' className='link nav-tab__link'>О проекте</a>
        </li>
        <li>
          <a href='#techs' className='link nav-tab__link'>Технологии</a>
        </li>
        <li>
          <a href='#student' className='link nav-tab__link'>Студент</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
