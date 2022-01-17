import React from 'react'
import Menu from './Menu'
import '../App'
import './Home.css'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Posts from './Posts';
function Home(props) {
    console.log(props.loginIs);
    if (!props.loginIs) {
        console.log("inside home fuhcn");
        return <Redirect to="/login" />;
    }
    console.log("inside home");
    return (
        <div className='home'>
            <Menu LoginIs={props.loginIs} handleLogout={props.handleLogout}></Menu>
            <div className="homeParent">
            {props.postsData.map(each=>{return <Posts postsData={each}></Posts>})}
            </div>
            its home
        </div>
    )
}

export default Home
