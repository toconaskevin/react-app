import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Login } from './Login';
import { Register } from './Register';
import { NavigationBar } from './components/NavigationBar';
import { Header } from './components/Header';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
      <React.Fragment>
        <NavigationBar />
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route component={Home} />
          </Switch>
        </Router>
      </React.Fragment>
      </div>
    );
  }
}

export default App;