import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
                <h2 className="nav--title">
                    jamessebastianbell.com
                </h2>
            
            <ul className='nav--menu'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/work">Work</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
            </ul>
            
            {/* <li>
                <Link to="/cv">CV</Link>
            </li> */}
            

        </nav>
    )
} 
