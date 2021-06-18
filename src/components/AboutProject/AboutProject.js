import './AboutProject.css';

function AboutProject() {
  return (
    <section className='project' id='project'>
      <div className='project__container'>
        <h2 className='title project__title'>О проекте</h2>
        <div className='project__block'>
          <div>
            <h3 className='project__header'>Дипломный проект включал 5 этапов</h3>
            <p className='project__subheader'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div>
            <h3 className='project__header'>На выполнение диплома ушло 5 недель</h3>
            <p className='project__subheader'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className='project__progress-bar'>
          <span className='project__progress-backend'></span>
          <span className='project__progress-frontend'></span>
        </div>
      </div>      
    </section>
  );
}

export default AboutProject;
