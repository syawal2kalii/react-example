import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

import Home from "./components/scenes/Home";
import Product from "./components/scenes/Product";
import Base from "./components/parts/Base";
import Header from "./components/parts/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Base>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/product">
              <Product></Product>
            </Route>
          </Switch>
        </Base>
      </Router>
    </div>
  );
}

export default App;
