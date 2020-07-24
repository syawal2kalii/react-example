import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Base(props) {
    return (
        <div>
            <Header/>
                {props.children}
            <Footer/>
        </div>
    )
}
