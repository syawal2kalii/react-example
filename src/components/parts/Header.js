import React from 'react'
import {
    BrowserRouter as Router,
    Link,

  } from "react-router-dom";

export default function Header() {
    return (
        <div>
            <Link to="/">Beranda</Link>
            <Link to="/product">Product</Link>
            {/* <Link to="/product/:productId">Product</Link> */}
            
        </div>
    )
}
