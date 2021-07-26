import React from 'react'
import Navbar from './Navbar';
export default function Layout(props) {
    return (
        <div className=' App bg-green'>
            <Navbar
                logoname="MemeHub"
                bgcolor="#FAFF00"
                logocolor="#8E2657"
                iconcolor='#8E2657'
                fontawesomeClass="fab fa-meetup"
                fontFamily="Athiti', sans-serif"
            />
            
                {props.children}
        </div>
    )
}
