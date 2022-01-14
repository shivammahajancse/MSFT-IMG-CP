import React from 'react'
import './Login.css'
import { Redirect } from 'react-router-dom'
import '../App.js'
import { useState } from 'react';
function Login({LoginIs}) {
    const [userName, setuserName] = useState("");
    const [pass, setpass] = useState("")
    const [message, setmessage] = useState("")
    const array = [{id:"VasuVj24",pass:"123"}]
    const SignIn = ()=>{
        const obj={
            userName:userName,
            password:pass
        }
        verify(obj);
        console.log(obj);
    }
    const verify = (obj)=>{
        if(array[0].id!==obj.userName || array[0].pass!==obj.password){
            return setmessage("Incorrect Password or Id")
        }
        console.log("logged in");   
    }
    return (
        <div className='login-parent'>
           <img src="" alt="" />
           <h1>SignIn</h1>
           <input onChange={(e)=>{setuserName(e.target.value)}} placeholder='Name' type="text" />
           <input onChange={(e)=>{setpass(e.target.value)}} placeholder='Password' type="text" />
           <button onClick={SignIn}>SignIn</button>
           <div className="message">{message}</div>
        </div>
    )
}

export default Login
