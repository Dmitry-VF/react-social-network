import React, {Suspense} from 'react';
import {BrowserRouter, Route, withRouter, Link, Redirect} from "react-router-dom";
import './App.css';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

// import { addPost } from './redux/state';

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>

                    <Suspense fallback={<Preloader/>}>
                        <Route path='/profile/:userId?'
                               render={() => <ProfileContainer/>}/>
                        <Route path='/dialogs'
                               render={() => <DialogsContainer/>}/>
                    </Suspense>
                    <Route path='/login'
                           render={() => <Login/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/feed' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Redirect from='/' to='/profile/'/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {
        initialized: state.app.initialized
    }
)
let AppContainer = compose(
    withRouter,
    connect(mapStateToProps,
        {
            initializeApp
        }
    ))(App);

const SocialApp = (props) => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <AppContainer/>
            </BrowserRouter>
        </Provider>
    )
}

export default SocialApp;