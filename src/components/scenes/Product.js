import React from "react";
// import Base from "../parts/Base";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
// import Detail from "../parts/Detail";

export default function Product() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <Router>
        <h1>product</h1>
        <ul>
          <li>
            <Link to={`${url}/product1`}>Product1</Link>
          </li>
          <li>
          <Link to={`${url}/product2`}>Product2</Link>
            
          </li>
          <li>
          <Link to={`${url}/product3`}>Product3</Link>
          </li>
          <Switch>
            <Route exact path={path}>
              <h3>Please select a topic.</h3>
            </Route>
            <Route path={`${path}/:productId`}>
              {/* <Detail/> */}
              <Detail1></Detail1>
              {/* <h1>dd</h1> */}
            </Route>
          </Switch>
        </ul>
      </Router>
    </div>
  );
}

function Detail1() {
  let { productId } = useParams();

  return (
    <div>
      <h3>{productId}</h3>
    </div>
  );
}
