import React from 'react'
import './Post.css'
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import { useState } from 'react';
function Posts(props) {
    const [like, setlike] = useState(props.postsData.like)
    if(props.postsData.name===''){
        return console.log("no data");
    }
    return (
        <div className='posts-Parent'>
            <div className="posts-Details">
                <div className="posts-Details-Child">
                <Avatar sx={{ bgcolor: deepOrange[300] }}>RR</Avatar>

                        <div className='name'>
                        {props.postsData.name}
                        <div className='bio'>{props.postsData.bio}</div>
                    </div>
                </div>
                <div className="posts-Content">{props.postsData.content}</div>
                {/* <div className='image'></div> */}
                <div className="buttons">
                    <div className="like" onClick={()=>{setlike(parseInt(`${like}`)+1);props.postsData.like=like}}>
                    ❤️{like}
                    </div>
                    <div className="time">{props.postsData.time}</div>
                </div>
            </div>
        </div>
    )
}

export default Posts
