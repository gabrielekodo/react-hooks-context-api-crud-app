//import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './components/About';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import { Heading } from './components/Heading';
import Home from './components/Home';
import NotFound from './components/NotFound';
import { GlobalProvider } from './context/GlobalState'
class App extends Component {
  render() {
    return (
      <div>
        <GlobalProvider>

          <Router>
            <Heading />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/add" component={AddUser} />
              <Route exact path="/edit/:id" component={EditUser} />
              <Route exact path="/about" component={About} />
              <Route component={NotFound} />

            </Switch>

          </Router>
        </GlobalProvider>
      </div>

    );
  }
}
export default App;
