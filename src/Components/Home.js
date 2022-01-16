import React from 'react'
import Menu from './Menu'
import '../App'
import './Home.css'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
function Home(props) {
    console.log(props.loginIs);
    if(!props.loginIs){
        console.log("inside home fuhcn");
        return <Redirect to="/login"/>;
    }
    console.log("inside home");
    return (
        <div className='home'>
        <Menu LoginIs={props.loginIs} handleLogout={props.handleLogout}></Menu>
        <div className="homeParent">
            
        </div>
        its home
        </div>
    )
}

export default Home
