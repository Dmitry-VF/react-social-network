import React, {Suspense} from 'react';
import {HashRouter, Route, withRouter, Redirect} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar';
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
                    <Route exact path='/'
                           render={() => <Redirect to={'/profile'}/>}/>
                    <Suspense fallback={<Preloader/>}>
                        <Route path='/profile/:userId?'
                               render={() => <ProfileContainer/>}/>
                        <Route path='/dialogs'
                               render={() => <DialogsContainer/>}/>
                    </Suspense>
                    <Route path='/login'
                           render={() => <Login/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>

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

        <HashRouter >
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </HashRouter>

    )
}

export default SocialApp;