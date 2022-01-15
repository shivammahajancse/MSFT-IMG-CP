import React from 'react'
import './Login.css'
import '../App.js'
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Login(props) {
    const [user, setuser] = useState({ userName: "", pass: "" });
    const [message, setmessage] = useState("");
    console.log("inside login");
    if (props.LoginIs) {
        console.log("inside if of login" + props.LoginIs);
        return <Redirect to='/' />
    }
    const SignIn = () => {
        console.log("inside sign in func of login");
        const idPass = props.receiveData(user);
        !idPass ? setmessage("Incorrect Username or Password") : setmessage("")
    }
    return (
        <div className='login-gp'>
            <div className='login-parent'>
                <img src="" alt="" />
                <h1>SignIn</h1>
                <input onChange={(e) => { setuser({ userName: `${e.target.value}`, pass: `${user.pass}` }) }} placeholder='Name' type="text" />
                <input onChange={(e) => { setuser({ userName: `${user.userName}`, pass: `${e.target.value}` }) }} placeholder='Password' type="text" />
                <button className='signin' onClick={SignIn}>SignIn</button>
            </div>
            <div className="message">{message}</div>
            <Link to='/signup' style={{ textDecoration: 'none' }}>
                <div className="signUp-popUp">Not A User SignUp Now</div>
            </Link>
        </div>
    )
}

export default Login
