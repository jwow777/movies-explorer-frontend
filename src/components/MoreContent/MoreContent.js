import './MoreContent.css';

function MoreContent({ handleAddMovies }) {
  return (
    <div className='more-content'>
      <button className='more-content__button' onClick={handleAddMovies}>Ещё</button>
    </div>
  );
}

export default MoreContent;