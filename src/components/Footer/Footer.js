import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__header'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__block'>
        <p className='footer__copyright'>© 2021</p>
        <ul className='list social-links social-links_footer'>
          <li>
            <a href='https://praktikum.yandex.ru/' target='_blank' rel='noreferrer' className='link footer__social-link'>Яндекс.Практикум</a>
          </li>
          <li>
            <a href='https://github.com/jwow777' target='_blank' rel='noreferrer' className='link footer__social-link'>Github</a>
          </li>
          <li>
            <a href='https://www.facebook.com/profile.php?id=1334733479' target='_blank' rel='noreferrer' className='link footer__social-link'>Facebook</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
