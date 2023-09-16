import { Avatar } from '@mui/material'
import React from 'react'
import "./Post.css";
import { forwardRef } from 'react';
import InputOption from './InputOption';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';


const Post=forwardRef(({name, message, description, photoUrl },ref)=> {

    return (
        <div ref={ref} className='post'>
            <div className='post-header'>
                <Avatar src={photoUrl}> {name[0]}</Avatar>

                <div className='post-info'>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>

                </div>


            <div className='post-body'>
                <p>{message}</p>
            </div>

            <div className='post-buttons'>
                
                
            <InputOption Icon={ThumbUpAltIcon} title="Like" color="#70B5F9" />
            <InputOption Icon={CommentIcon} title="Comment" color="#70B5F9" />
            <InputOption Icon={ShareIcon} title="Share" color="#70B5F9" />
            <InputOption Icon={SendIcon} title="Send" color="#70B5F9" />

        </div>

        
        </div>
    )
}
)

export default Post
