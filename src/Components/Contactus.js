import React from 'react'
import Menu from './Menu'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
function Contactus(props) {
    if(props.loginIs===false){
        console.log("inside");
        return <Redirect to="/login"/>;
    }
    return (
        <div className='contactus'>
        <Menu LoginIs={props.loginIs} handleLogout={props.handleLogout}></Menu>
            <div className="contactus">
                <div className="contactusChild">

                </div>
            </div>
        </div>
    )
}

export default Contactus
