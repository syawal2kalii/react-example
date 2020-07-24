import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/scenes/Home';
import Product from './components/scenes/Product'

function App() {
  return (
    <div className="App">
        <Router>
                <nav>
                    <ul>
                        <Link to="/">Beranda</Link>
                        <Link to="/product">Product</Link>
                    </ul>
                    <Switch>
                        <Route exact path="/">
                            <Home></Home>
                        </Route>
                        <Route exact path="/product">
                            <Product></Product>
                        </Route>
                    </Switch>
                </nav>
            </Router>
    </div>
  );
}

export default App;
