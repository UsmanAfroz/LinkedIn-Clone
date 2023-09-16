import React, { useEffect, useState } from 'react'
import "./Feed.css";
import "./InputOption.css"
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import FlipMove from "react-flip-move";

import {db} from "./firebase";
import Post from './Post';
import InputOption from './InputOption.js';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import { selectUser } from './features/counter/userSlice';
import { useSelector } from 'react-redux';

function Feed() {
   
    const user=useSelector(selectUser);
    const[input, setInput]=useState([]);
    const [posts, setPosts]=useState([]);

    useEffect(() =>{
       db.collection("posts").orderBy("timestamp","desc").onSnapshot((snapshot)=>
       setPosts(
        snapshot.docs.map((doc)=>(
            {
                id:doc.id,
                data:doc.data()
            }))
        )
       );
    },[]);

    const sendPost = (e) =>{
    e.preventDefault();

    db.collection("posts").add({
        name:user.displayName,
        description:user.email,
        message:input,
        photoUrl:user.photoUrl || "",
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),

    });
    
    setInput('');
};
    return (
        <div className='feed'>
            <div className='feed-inputContainer'>
                <div className='inputFeed'>
                    <CreateIcon />
                    <form>
                        <input type='text' value={input} onChange={e => setInput(e.target.value)} />
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>

                </div>

                <div className='feed-inputOptions'>
                <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
                <InputOption Icon={SubscriptionsIcon} title="Video" color="#70B5F9" />
                <InputOption Icon={EventNoteIcon} title="Event" color="#70B5F9" />
                <InputOption Icon={CalendarViewDayIcon} title="WriteArticle" color="#70B5F9" />
                </div>
            </div>

            {/*posts*/}
            <FlipMove>
           { posts.map(({id, data: {name, description, message, photoUrl}})=>
           (
            <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
            />
            ))}
            </FlipMove>


        </div>
    );
}

export default Feed;
