import React from 'react'
import Menu from './Menu'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import './Notification.css'
import BadgeIcon from '@mui/icons-material/Badge';
function Notification(props) {
    if(props.loginIs===false){
        console.log("inside");
        return <Redirect to="/login"/>;
    }
    return (
        <div className='notification'>
        <Menu LoginIs={props.loginIs} handleLogout={props.handleLogout}></Menu>
           <div className="notification-1">
               {props.notification.map(each=>{return <div className='indi-Noti'><BadgeIcon style={{margin:'1vmin',fontSize:'5vmin'}}></BadgeIcon>{each}</div>})}
           </div>
        </div>
    )
}

export default Notification
