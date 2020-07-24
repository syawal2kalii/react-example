import React from 'react'
import { useParams } from 'react-router-dom'

export default function Detail() {
    let {productId} = useParams();
    return (
        <div>
            <h3>{productId}</h3>
        </div>
    )
}
