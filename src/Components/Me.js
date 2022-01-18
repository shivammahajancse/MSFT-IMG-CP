import React from 'react'
import Menu from './Menu'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Me.css'
import TextField from '@mui/material/TextField';
function Me(props) {
    if (props.loginIs === false) {
        console.log("inside");
        return <Redirect to="/login" />;
    }
    return (
        <div className='me'>
            <Menu LoginIs={props.loginIs} handleLogout={props.handleLogout}></Menu>
            <div className="meParent">
                <div className="profileImage">
                    <AccountCircleIcon style={{ fontSize: '17vmin' }}></AccountCircleIcon>
                    <div className="info">
                        <h2></h2>
                        <h3>Admin</h3>
                        <h4>NIMS School</h4>
                    </div>
                    <div className="aboutInfo">
                    </div>
                </div>
                <TextField style={{alignSelf:'flex-start'}} id="standard-basic" label="About" variant="standard" />
            </div>
        </div>
    )
}

export default Me
