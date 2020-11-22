import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './App.css';
import Music from './components/Music/Music';
// import Friends from './components/Navbar/Friends';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
// import { addPost } from './redux/state';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile/:userId?'
            render={() => <ProfileContainer />} />
          <Route path='/dialogs'
            render={() => <DialogsContainer />} />
            <Route path='/login'
            render={() => <Login />} />
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/feed' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>   
      </div>
    </BrowserRouter>
  );
}

export default App;
