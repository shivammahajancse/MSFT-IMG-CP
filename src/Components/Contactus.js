import React from 'react'
import Menu from './Menu'
import './Contactus.css'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Search from './Search';
function Contactus(props) {
    if (props.loginIs === false) {
        console.log("inside");
        return <Redirect to="/login" />;
    }
    return (
        <div className='contactus'>
            <Menu search={props.search} setSearchTrue={props.setSearchTrue} LoginIs={props.loginIs} handleLogout={props.handleLogout}></Menu>
            {!props.search ? <div className="contactusChild">
                <div className="contactusChild1">
                    <h1>What Actually are we?</h1>
                    We are a Platform, that aims at making biggest School Student Community around the world to help, explore and educate.
                </div>
                <div className="contactusChild1">
                    <h1>Why did we made it?</h1>
                    In today's world school students are exceptionally talented but they don't have the right platform to showcase their talent.
                    Despite having lots of opportunities, these students face difficulties in finding the right opportunity because they are in scattered form.
                    In the search of the right opportunity, they often get indulged into wrong things and waste a lot of time.
                    Also, Organisations whose target audience is school students face difficulties in finding them at one place
                </div>
                <div className="contactusChild1">
                    <h1>Our Research</h1>
                    Students don't have a big community to support and explore their talent.

                    Even if they know about the competitions and somehow manage to secure good positions then also they don't have the right platform to share and showcase their skillsWe made a platform ("Acad"), that aims at making biggest School Student Community around the world.
                    Through this platform, students will get aware about the opportunities and it will also enlarge their field of view.
                    It will help students to showcase their skillset and increase their reach.
                    It will also help organizations targeting school students to get maximum reach in minimum investment.
                </div>
                <div className="contactusChild2">
                    <h2>Contact Us</h2>
                    <span>00000000000</span>                    
                    xyz@gmail.com
                </div>
            </div> : <Search />}
        </div>
    )
}

export default Contactus
