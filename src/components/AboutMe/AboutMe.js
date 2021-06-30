import './AboutMe.css';
import avatar from '../../images/aboutme/avatar.jpg';

function AboutMe() {
  return (
    <section className='student' id='student'>
      <h2 className='title student__title'>Студент</h2>
      <div className='student__about'>
        <img src={avatar} alt='Александр' className='student__photo'/>
        <div>
          <h2 className='student__name'>Александр</h2>
          <p className='student__position'>Фронтенд-разработчик, 27 лет</p>
          <p className='student__history'>
            Я родился и живу в Москве, закончил Аэрокосмический факультет МАИ. У меня есть жена. 
            Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
            С 2018 года работал в компании АО «НПО Лавочкина». После того, как прошёл курс по веб-разработке,
            начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>          
        </div>
        <ul className='list social-links social-links_student'>
          <li>
            <a href='https://www.facebook.com/profile.php?id=1334733479' target='_blank' rel='noreferrer' className='link student__link'>Facebook</a>
          </li>
          <li>
            <a href='https://github.com/jwow777' target='_blank' rel='noreferrer' className='link student__link'>Github</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default AboutMe;
