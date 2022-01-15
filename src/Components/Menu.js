import React from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'
function Menu(props) {
    return (
        <div className='menu-parent'>
            <h1 to="/">Acad</h1>
            <div className='menu-child'>
                <div className="search"><input type="text" /><button>Search</button></div>
                <div className="menuRight">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <button>Home</button>
                    </Link>
                    <Link to="/notification" style={{ textDecoration: 'none' }}>
                        <button>Notification</button>
                    </Link>
                    <Link to="/me" style={{ textDecoration: 'none' }}>
                        <button><img src="" alt="" />Me</button>
                    </Link>
                    <Link to='/login' style={{ textDecoration: 'none' }}>
                    <button onClick={()=>{props.handleLogout()}}>LogOut</button>
                    </Link>
                    <Link to='/contact' style={{ textDecoration: 'none' }}>
                    <button>ContactUs</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Menu
