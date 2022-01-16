import React from 'react'
import './Post.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Posts() {
    return (
        <div className='posts-Parent'>
            <div className="posts-Details">
                <div className="posts-Details-Child">
                    <AccountCircleIcon></AccountCircleIcon>
                    <h2>
                        Raju Rastogi
                        <h3>NIMS School</h3>
                    </h2>
                </div>
                <div className="posts-Content">lorremdnadwaijlmaxwdiklxanjwfwefwdwkdnjd</div>
                <div className='image'></div>
                <div className="buttons">
                    <div className="like"></div>
                    <div className="like-counter"></div>
                </div>
            </div>
        </div>
    )
}

export default Posts
