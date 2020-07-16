import React from "react";
import Home from '../Home/Index';
import Products from '../Products/Products';
import Contact from '../Contact/Contact';

import {BrowserRouter as Router, Route} from "react-router-dom";

class Routes extends React.Component {
  render() {
    return (
      <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/Products' component={Products} />
        <Route exact path='/Contact' component={Contact} />
      </div>
      </Router>
    );
  }
}

export default Routes;
