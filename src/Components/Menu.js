import React from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'
function Menu() {
    return (
        <div className='menu-parent'>
            <h1 to="/">Dreams</h1>
            <div className='menu-child'>
                <div className="search"><input type="text" /><button>Search</button></div>
                <div className="menuRight">
                    <Link to="/">
                        <button>Home</button>
                    </Link>
                    <Link to="/notification">
                        <button>Notification</button>
                    </Link>
                    <Link to="/me">
                        <button><img src="" alt="" />Me</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Menu
