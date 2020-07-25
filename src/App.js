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
import DetailProduct from './components/scenes/DetailProduct'

function App() {
  return (
    <div className="App">
      <Router>
        <Base>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/product" component={Product}/>
            <Route exact path="/product/:productId" component={DetailProduct}/>
          </Switch>
        </Base>
      </Router>
    </div>
  );
}

export default App;
