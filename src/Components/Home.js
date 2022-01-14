import React from 'react'
import Menu from './Menu'
import '../App'
import {Redirect} from 'react-router-dom'
function Home({LoginIs}) {
    if(!LoginIs){
        console.log("inside");
        return <Redirect to="/login"/>;
    }
    return (
        <div>
        <Menu></Menu>
        its home
        </div>
    )
}

export default Home
