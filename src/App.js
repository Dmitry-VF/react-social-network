import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
// import Friends from './components/Navbar/Friends';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Users from "./components/Users/UsersAPIComponent";
import UsersContainer from "./components/Users/UsersContainer";
// import { addPost } from './redux/state';

const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile'
            render={() => <Profile/>} />
          <Route path='/dialogs'
            render={() => <DialogsContainer />} />
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
