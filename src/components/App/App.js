import { useState } from 'react';
import { Route, Switch } from 'react-router';
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import MobileMenu from '../MobileMenu/MobileMenu';
import NotFound from '../NotFound/NotFound';
import './App.css';

function App() {
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const handleClickSidebar = () => setIsOpenSidebar(true);
  const handleClickCloseSidebar = () => setIsOpenSidebar(false);
  const handleClickLogin = () => {
    setIsLoggedIn(true);
    history.push('/');
  };
  const handleClickRegistr = () => history.push('/signin');
  const handleClickLogout = () => {
    setIsLoggedIn(false);
    history.push('/signin');
  };
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Header 
            isLoggedIn={isLoggedIn}
            handleClickSidebar={handleClickSidebar}
          />
          <Main
            isOpenSidebar={isOpenSidebar}
          />
          <Footer />
          <MobileMenu
            isOpenSidebar={isOpenSidebar}
            handleClickCloseSidebar={handleClickCloseSidebar}
          />
        </Route>
        <Route path='/signin'>
          <Login handleClickLogin={handleClickLogin}/>
        </Route>
        <Route path='/signup'>
          <Register
            handleClickRegistr={handleClickRegistr}
          />
        </Route>
        <Route path='/movies'>
          <Header 
            isLoggedIn={isLoggedIn}
            handleClickLogout={handleClickLogout}
          />
          <Movies />
          <Footer />
          <MobileMenu
            isOpenSidebar={isOpenSidebar}
            handleClickCloseSidebar={handleClickCloseSidebar}
          />
        </Route>
        <Route path='/saved-movies'>
          <Header 
            isLoggedIn={isLoggedIn}
            handleClickLogout={handleClickLogout}
          />
          <SavedMovies />
          <Footer />
          <MobileMenu
            isOpenSidebar={isOpenSidebar}
            handleClickCloseSidebar={handleClickCloseSidebar}
          />
        </Route>
        <Route path='/profile'>
          <Header 
            isLoggedIn={isLoggedIn}
            handleClickLogout={handleClickLogout}
          />
          <Profile
            handleClickLogout={handleClickLogout}
          />
          <MobileMenu
            isOpenSidebar={isOpenSidebar}
            handleClickCloseSidebar={handleClickCloseSidebar}
          />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
