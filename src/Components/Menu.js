import React from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ContactMailRoundedIcon from '@mui/icons-material/ContactMailRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
function Menu(props) {
    return (
        <div className='menu-parent'>
            <div className='menu-logo' to="/">Acad!</div>
            <div className='menu-child'>
                <div className="search"><input type="text" /><button><SearchRoundedIcon></SearchRoundedIcon>Search</button></div>
                <div className="menuRight">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <button><HomeRoundedIcon></HomeRoundedIcon>Home</button>
                    </Link>
                    <Link to="/notification" style={{ textDecoration: 'none' }}>
                        <button><NotificationsActiveRoundedIcon></NotificationsActiveRoundedIcon>Notification</button>
                    </Link>
                    <Link to='/contact' style={{ textDecoration: 'none' }}>
                    <button><ContactMailRoundedIcon></ContactMailRoundedIcon>ContactUs</button>
                    </Link>
                    <Link to="/me" style={{ textDecoration: 'none' }}>
                        <button><img src="" alt="" /><AccountCircleIcon></AccountCircleIcon>Me</button>
                    </Link>
                    <Link to='/login' style={{ textDecoration: 'none' }}>
                    <button onClick={()=>{props.handleLogout()}}><LogoutRoundedIcon></LogoutRoundedIcon>LogOut</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Menu
