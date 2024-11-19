import React from 'react'
import './Style.css'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <div>
            <nav>

                <Link className="nav-link" to="/">
                    <li>Home</li>
                </Link>




                <Link className="nav-link" to="/cart">
                    <li>Cart</li>
                </Link>
            </nav>
        </div>
    )
}

export default NavBar
