import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    }
    const closeMenu = () => {
        setNavbarOpen(false)
    }

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

            <button onClick={handleToggle}>
            {navbarOpen ? (
                <MdClose style={{ color: "#333333", width: "40px", height: "40px" }} />
            ) : (
                <FiMenu style={{ color: "#333333", width: "40px", height: "40px" }} />
            )}
            </button>
            <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                <li className='hamburger--item'>
                    <Link 
                        to="/" 
                        onClick={() => closeMenu()}>
                            Home
                    </Link>
                </li>
                <li className='hamburger--item'>
                    <Link 
                        to="/work"
                        onClick={() => closeMenu()}>
                            Work
                    </Link>
                </li>
                <li className='hamburger--item'>
                    <Link 
                        to="/projects"
                        onClick={() => closeMenu()}>
                            Projects
                    </Link>
                </li>
            </ul>
            

        </nav>
    )
} 
