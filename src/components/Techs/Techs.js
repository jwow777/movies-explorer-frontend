import './Techs.css';

function Techs() {
  return (
    <section className='techs' id='techs'>
      <div className='techs__container'>
        <h3 className='title techs__title'>Технологии</h3>
        <div className='techs__block'>
          <h2 className='techs__header'>7 технологий</h2>
          <p className='techs__subheader'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
          <ul className='list techs__list'>
            <li className='techs__item'>
              HTML
            </li>
            <li className='techs__item'>
              CSS
            </li>
            <li className='techs__item'>
              JS
            </li>
            <li className='techs__item'>
              React
            </li>
            <li className='techs__item'>
              Git
            </li>
            <li className='techs__item'>
              Express.js
            </li>
            <li className='techs__item'>
              mongoDB
            </li>
          </ul>
        </div>
      </div> 
    </section>
  );
}

export default Techs;
