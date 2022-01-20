import React from 'react'
import Menu from './Menu'
import '../App'
import './Home.css'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Posts from './Posts';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import Search from './Search'
function Home(props) {
    console.log(props.loginIs);
    if (!props.loginIs) {
        console.log("inside home fuhcn");
        return <Redirect to="/login" />;
    }
    console.log("inside home");
    return (
        <div className='home'>
            <Menu search={props.search} setSearchTrue={props.setSearchTrue} LoginIs={props.loginIs} handleLogout={props.handleLogout}></Menu>
            {!props.search ? <div className="grandParent">
                <div className="events">
                    <h1>Events</h1>
                    {
                        props.events ? props.events.map(each => { return <div className='indi-event'><EmojiEventsIcon></EmojiEventsIcon> {each}</div> }) : <div className='indi-event'>No events happening now but we will Soon with a exciting event!</div>
                    }
                </div>
                <div className="homeParent">
                    {props.postsData.map(each => { return <Posts postsData={each}></Posts> })}
                </div>
            </div> : <Search/>}
        </div>
    )
}

export default Home
