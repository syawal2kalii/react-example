import React from 'react'

export default function ListProducts() {
    return (
        <div>
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
        </div>
    )
}
