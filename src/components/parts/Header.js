import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
  
export default function Header() {
    return (
        <div>
            <Link to="/">Beranda</Link>
            <Link to="/product">Product</Link>
            
        </div>
    )
}
