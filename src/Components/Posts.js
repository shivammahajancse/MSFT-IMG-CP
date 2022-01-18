import React from 'react'
import './Post.css'
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
import { Button } from '@mui/material';
function Posts(props) {
    const [like, setlike] = useState(props.postsData.like)
    if (props.postsData.name === '') {
        return console.log("no data");
    }
    return (
        <div className='posts-Parent'>
            <div className="posts-Details">
                <div className="posts-Details-Child">
                    {/* <Avatar sx={{ bgcolor: deepOrange[300] }}>RR</Avatar> */}
                    <Avatar src="/broken-image.jpg" />

                    <div className='name'>
                        {props.postsData.name}
                        <div style={{fontWeight: "bold"}} className='bio'>{props.postsData.bio}</div>
                    </div>
                </div>
                <div className="posts-Content">{props.postsData.content}</div>
                {/* <div className='image'></div> */}
                <div className="buttons">
                    <div className="like" onClick={() => { setlike(parseInt(`${like}`) + 1); console.log(props.postsData.like); props.postsData.like = like }}>
                        <Button variant="outlined" color="error">
                            ❤️{like}
                        </Button>
                    </div>
                    <div className="time">{props.postsData.time}</div>
                </div>
            </div>
        </div>
    )
}

export default Posts
