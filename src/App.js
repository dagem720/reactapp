import React, {Fragment,useEffect} from 'react'
import axios from 'axios'
import {Provider} from 'react-redux'
import store from './store/index'
import {loadUser} from './store/actions/auth'
axios.defaults.baseURL = 'http://localhost:5000/'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Layout from './components/Layout/Layout';
import Alert from './components/Layout/Alert';
import Landing from './components/Layout/Landing';
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import dashboard from './components/Dashboard/dashboard'
import PrivateRoute from './components/routing/PrivateRoute'

import './App.css';
const App = ({}) =>{
  {
    useEffect(() => {
      
      store.dispatch(loadUser())
    }, [])


    return (
    <Provider store={store}>
   <Router>
      <Fragment >
      
      <Layout/>
      <Alert/>
      <Route exact path='/' component={Landing}></Route>
      
      <section>
      
        <Switch>
          <PrivateRoute exact path="/dashboard" component={dashboard}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/register' component={Register}/>
        </Switch>
      </section>
    </Fragment>
   </Router>
   </Provider>
  )};
}



export default App;
