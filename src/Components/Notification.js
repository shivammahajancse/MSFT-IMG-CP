import React from 'react'
import Menu from './Menu'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import './Notification.css'
import BadgeIcon from '@mui/icons-material/Badge';
import Search from './Search';
function Notification(props) {
    if(props.loginIs===false){
        console.log("inside");
        return <Redirect to="/login"/>;
    }
    return (
        <div className='notification'>
        <Menu search={props.search} setSearchTrue={props.setSearchTrue} LoginIs={props.loginIs} handleLogout={props.handleLogout}></Menu>
           {!props.search ? <div className="notification-1">
               {props.notification.map(each=>{return <div className='indi-Noti'><BadgeIcon style={{margin:'1vmin',fontSize:'5vmin'}}></BadgeIcon>{each}</div>})}
           </div> : <Search/>}
        </div>
    )
}

export default Notification
