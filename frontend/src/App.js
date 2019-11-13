import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Login } from './Login';
import { Register } from './Register';
import { NavigationBar } from './components/NavigationBar';
import { Header } from './components/Header';
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
          <Header />
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/cities" component={Cities} />
              <Route path="/itineraries" component={Itineraries} />
              <Route component={Home} />
            </Switch>
          </Router>
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;