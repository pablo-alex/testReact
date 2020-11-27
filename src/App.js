import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import About from './components/About';
import Home from './components/Home';


function App() {
  return (
    <Router>
      <div className="App">
  
        <div className="navbar navbar-dark bg-dark">
          <Link to="/" className="btn btn-dark">
            Home      
          </Link>
          <NavLink to="/about" className="btn btn-dark" activeClassName="active">
            About
          </NavLink>
        </div>
        <hr />

        <Switch>
          <Route path="/about"> 
            <About />
          </Route>
          <Route path="/"> 
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
