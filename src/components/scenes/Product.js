import React from "react";
// import Base from "../parts/Base";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import Detail from "../parts/Detail";
// import ListProduct from "../parts/ListProducts";
import DetailProduct from '../scenes/DetailProduct'

export default function Product() {
  let { path, url } = useRouteMatch();
  return (
    <div>
     {/* harus tambah router di sini */}
        <ul>
          <li><Link to="product/product1">Product1</Link></li>
          <li><Link to="product/product2">Product2</Link></li>
          <li><Link to="product/product3">Product3</Link></li>
        </ul>
        
     
      
      {/* <Router>
        <h1>product</h1>
        
          
        <Switch> <h3>Please select a topic.</h3>
          
          <Route exact path={path} >
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
          </ul>
            <h3>Please select a topic.</h3>
          </Route>
          <Route path={`${path}/:productId`} component={Detail}>
            
          </Route>
        </Switch>
      </Router> */}
    </div>
  );
}


