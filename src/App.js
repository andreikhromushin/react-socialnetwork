import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {withRouter} from "./hoc/withRouter";

import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends Component {
    catchAllUnhandledErrors = (reason, promise) => {
        alert("Some error occured");
        //console.error(promiseRejectionEvent);
    }
    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }
    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
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
                    <Routes>
                        <Route exact path='/'
                               element={<Navigate to={"/profile"}/>} />

                        <Route path='/dialogs'
                               element={
                               <React.Suspense fallback={<div>loading...</div>}> 
                               <DialogsContainer /> 
                               </React.Suspense>
                            } />

                        <Route path='/profile/:userId?'
                               element={
                               <React.Suspense fallback={<div>loading...</div>}> 
                               <ProfileContainer /> 
                               </React.Suspense>
                            } />

                        <Route path='/users'
                               element={<UsersContainer/>} />

                        <Route path='/login'
                               element={<LoginPage/>} />

                        <Route path='*'
                               element={<div>404 NOT FOUND</div>} />
                    </Routes>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const ReactSocialNetworkApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default ReactSocialNetworkApp;
