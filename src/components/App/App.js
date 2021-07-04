import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import MobileMenu from '../MobileMenu/MobileMenu';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import NotFound from '../NotFound/NotFound';
import MainApi from '../../utils/MainApi';
import MoviesApi from '../../utils/MoviesApi';
import { useFormWithValidation } from "../../utils/hooks";
import { MORE_BUTTON_RESOLUTION_SETTINGS } from "../../utils/constants";
import './App.css';

function App() {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(Boolean(localStorage.jwt));
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [state, setState] = useState({
    movieList: [],
    savedMovieList: [],
    movieSearch: '',
    movieSearchSubmitClick: false,
    savedMovieSearch: '',
    movieSavedSearchSubmitClick: false,
    filteredMoviesList: [],
    filteredSavedMovieList: [],
    numberMovies: MORE_BUTTON_RESOLUTION_SETTINGS.big.default,
    addNumberMovies: MORE_BUTTON_RESOLUTION_SETTINGS.big.grow,
    disableInputs: false,
  })
  const handleClickSidebar = () => setIsOpenSidebar(true);
  const handleClickCloseSidebar = () => setIsOpenSidebar(false);
  const [errorText, setErrorText] = useState('');
  const [successText, setSuccessText] = useState(false);
  const handleTextError = (message) => {
    setErrorText(message);
    setTimeout(() => setErrorText(''), 5000);
  }

  const tokenCheck = (token) => {
    return MainApi.checkUserToken(token)
      .then((res) => {
        if (res) {
          setCurrentUser(res);
          setIsLoggedIn(true);
          history.push('/movies');
        } else {
          Promise.reject();
        }
      })
      .catch((err) => console.log(`Ошибка ${err.status}: ${err.message}`))
  };

  useEffect(() => {
    if (isLoggedIn) {
      const jwt = localStorage.getItem('jwt');
      setIsLoading(true);
      Promise.all([
        MainApi.checkUserToken(jwt),
        MoviesApi.getMovies(),
        MainApi.getSavedMovies(jwt),
      ])
        .then(([
          userData,
          movieList,
          savedMovieList,
        ]) => {
          setCurrentUser(userData);
          setState({
            ...state,
            movieList,
            savedMovieList: savedMovieList.filter(movie => movie.owner === userData._id)
          });
        })
        .catch((err) => console.log(`Ошибка ${err.status} - ${err.statusText}`))
        .finally(() => setIsLoading(false));
    }
  }, [isLoggedIn]);

  const handleClickLogin = (data) => {
    const { email, password } = data;
    setState({ ...state, disableInputs: true });
    return MainApi.login(email, password)
      .then((data) => {
        localStorage.setItem('jwt', data.token);
        tokenCheck(data.token);
      })
      .catch((err) => {
        if (err.status && err.status === 401 ) {
          handleTextError('Неверный логин или пароль');
        } else if (err.status && err.status === 400) {
          handleTextError('Проверьте формат данных');
        } else {
          handleTextError('Ошибка выполнения команды. Попробуйте снова.');
        }
      })
      .finally(() => setState({ ...state, disableInputs: false }));
  };

  const handleClickRegistr = (data) => {
    const { name, email, password } = data;
    setState({ ...state, disableInputs: true });
    return MainApi.register(name, email, password)
      .then(() => {
        return handleClickLogin({ email, password });
      })
      .catch((err) => {
        if (err.status && err.status === 409 ) {
          handleTextError('Пользователь с таким email уже существует');
        } else if (err.status && err.status === 400) {
          handleTextError('Проверьте формат данных');
        } else {
          handleTextError('Ошибка выполнения команды. Попробуйте снова.');
        }
      })
      .finally(() => setState({ ...state, disableInputs: false }));
  };

  const handleEditProfile = (data) => {
    const token = localStorage.getItem('jwt');
    const { name, email } = data;
    setState({ ...state, disableInputs: true });
    return MainApi.updateUserInfo(name, email, token)
      .then((res) => {
        setCurrentUser(res);
        setSuccessText(true);
        setTimeout(() => setSuccessText(false), 5000);
      })
      .catch((err) => {
        if (err.status && err.status === 409 ) {
          handleTextError('Пользователь с такими данными уже существует');
        } else if (err.status && err.status === 400) {
          handleTextError('Проверьте формат данных');
        } else {
          handleTextError('Ошибка выполнения команды. Попробуйте снова.');
        }
      })
      .finally(() => setState({ ...state, disableInputs: false }));
  };

  const handleClickLogout = () => {
    localStorage.removeItem('jwt');
    setIsLoggedIn(false);
    setCurrentUser(null);
    history.push('/');
  };

  const handleClickSaveMovie = (movie) => {
    const token = localStorage.getItem('jwt');
    return MainApi.saveMovie(movie, token)
      .then((savedMovie) => {
        setState({
          ...state,
          savedMovieList: [...state.savedMovieList, savedMovie],
        })
      })
      .catch((err) => console.log(`${err.status}: ${err.message}`));
  };

  const handleClickRemoveSavedMovie = (movieId) => {
    const token = localStorage.getItem('jwt');
    return MainApi.removeMovie(movieId, token)
      .then((deletedMovie) => {
        const updateMovieList = state.savedMovieList.filter((i) => i._id !== deletedMovie._id);
        setState({ ...state, savedMovieList: updateMovieList, filteredSavedMovieList: updateMovieList })
      })
      .catch((err) => console.log(`${err.status}: ${err.message}`));
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      {
        useRouteMatch(['/signin', '/signup',]) 
        ? ''
        : (
            <>
              <Header 
                isLoggedIn={isLoggedIn}
                handleClickSidebar={handleClickSidebar}
              />
              <MobileMenu
                isOpenSidebar={isOpenSidebar}
                handleClickCloseSidebar={handleClickCloseSidebar}
              />
            </>
          )
      }
      <Switch>
        <Route exact path='/'>
          <Main
            isOpenSidebar={isOpenSidebar}
          />
        </Route>
        <Route exact path='/signin'>
          <Login
            state={state}
            handleClickLogin={handleClickLogin}
            useFormWithValidation={useFormWithValidation}
            errorText={errorText}
          />
        </Route>
        <Route exact path='/signup'>
          <Register
            state={state}
            handleClickRegistr={handleClickRegistr}
            useFormWithValidation={useFormWithValidation}
            errorText={errorText}
          />
        </Route>
        <ProtectedRoute
          exact path='/movies'
          isLoggedIn={isLoggedIn}
          component={Movies}
          state={state}
          setState={setState}
          handleClickSaveMovie={handleClickSaveMovie}
          handleClickRemoveSavedMovie={handleClickRemoveSavedMovie}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
        <ProtectedRoute
          exact path='/saved-movies'
          isLoggedIn={isLoggedIn}
          component={SavedMovies}
          state={state}
          setState={setState}
          handleClickRemoveSavedMovie={handleClickRemoveSavedMovie}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
        <ProtectedRoute
          exact path='/profile'
          state={state}
          isLoggedIn={isLoggedIn}
          component={Profile}
          handleEditProfile={handleEditProfile}
          handleClickLogout={handleClickLogout}
          useFormWithValidation={useFormWithValidation}
          errorText={errorText}
          successText={successText}
        />
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
      {
        useRouteMatch(['/signin', '/signup', '/profile',]) 
        ? ''
        : (
            <Footer />
          )
      }
    </CurrentUserContext.Provider>
  );
}

export default App;
