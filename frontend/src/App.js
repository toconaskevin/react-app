import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import { Login } from './components/Login';
import { Register } from './components/Register';
import NavigationBar from './components/NavigationBar';
import Cities from './components/Cities';
import Itineraries from './components/Itineraries';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <React.Fragment>
          <NavigationBar />
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route exact path="/cities" component={Cities} />
              <Route path="/cities/:id" component={Itineraries} />
              <Route component={Home} />
            </Switch>
          </Router>
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;