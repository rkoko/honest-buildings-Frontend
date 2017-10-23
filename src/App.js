import React, { Component } from 'react';
import LoginForm from './containers/LoginForm'
import SignupForm from './containers/SignupForm'
import MgmtForm from './containers/MgmtForm'
import Auth from './auth/authorize'
import AuthAdapter from './auth/authAdapter'
import Building from './components/Building'
import BuildingMgmt from './components/BuildingMgmt'
import {Router, Route, Redirect, Switch } from 'react-router-dom'
import BuildingList from './components/BuildingList'
import Home from './containers/Home'
import createBrowserHistory from 'history/createBrowserHistory'
import PropTypes from 'prop-types'

const history = createBrowserHistory()


class App extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  state = {
      auth: {
        isLoggedIn: false,
        user: '',
        errorMsg: ''
      }
    }

  onLogin = (loginParams) => {
  AuthAdapter.login(loginParams)
    .then( res => {
      //check for an error message
      if( res.error ){
        this.setState({
          errorMsg: res.error
        })
      }else{
        localStorage.setItem('jwt', res.jwt)
        this.setState({
          auth:{
            isLoggedIn: true,
            user: res.username
          }
        })
      }
    })
  }

  onSignup = (signUpParams) => {
AuthAdapter.signUp(signUpParams)
  .then( res => {
    //check for an error message
    if (res.error) {
      console.log("do nothing")
    } else {
      localStorage.setItem('jwt', res.jwt)
      this.setState({
        auth: {
          isLoggedIn: true,
          user: res.username
        }
      })
    }
    //if error render login again
    //else set the jwt token
  })
}


handleLogout = () => {
  localStorage.clear()
  this.setState({auth: {
    isLoggedIn:false,
    user: ''
  }})
}

  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Switch>
              <Route exact path="/" render={()=> this.state.auth.isLoggedIn ? <Redirect to="/home" /> : <LoginForm onLogin={this.onLogin} errorMsg={this.state.errorMsg}/>} />
              <Route path="/signup" render={() => <SignupForm /> }/>
              <Route path="/mgmt-signup" render={()=> <MgmtForm />} />
              <Route path="/home/results" component={Auth(BuildingList, {history: history, handleLogout: this.handleLogout})}/>
              <Route path="/buildings/:id" component={Auth(Building, {history: history, handleLogout: this.handleLogout})}/>
              <Route path="/building_mgmts/:id" component={Auth(BuildingMgmt, {handleLogout: this.handleLogout})}/>
              <Route path="/home" component={Auth(Home, {handleLogout: this.handleLogout})} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}


export default App
