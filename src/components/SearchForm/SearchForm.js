import { useState } from 'react';
import './SearchForm.css';

function SearchForm() {
  const [state, setState] = useState({
    search: '',
    checkbox: true,
  });
  const handleChange = (e) => {
    setState({
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
    });
  };
  const handleChangeReplicaCheckbox = () => setState({ ...state, checkbox: !state.checkbox });
  const handleSubmit = (e) => e.preventDefault();
  return (
    <form className='search'>
      <fieldset className='search__fieldset'>
        <input type='text' className='search__input' name='search' placeholder='Фильм' value={state.search} onChange={handleChange}/>
        <button className='button search__submit' onClick={handleSubmit}>Поиск</button>
      </fieldset>
      <div className='button search__switch'>
        <span className='search__switch-checkbox'>
          <input type='checkbox' id='switch' className='search__switch-input' name='checkbox' checked={state.checkbox} onChange={handleChange} />
          <span className='search__switch-checkbox-replica' onClick={handleChangeReplicaCheckbox}>
            <span className='search__switch-checkbox-knob'></span>
          </span>
        </span>
        <label htmlFor='switch' className='search__switch-text'>Короткометражки</label>
      </div>
    </form>
  );
}

export default SearchForm;
