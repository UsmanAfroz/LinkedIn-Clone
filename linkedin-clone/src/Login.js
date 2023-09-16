import React, { useState } from 'react'
import "./Login.css"
import { auth } from './firebase';
import { login } from './features/counter/userSlice';
import { useDispatch } from 'react-redux';
function Login() {

const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [profilePic,setprofilePic]=useState("");
const dispatch=useDispatch();

const loginToApp=(e) =>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password).then((userAuth)=>{
        dispatch(
            login({
                email:userAuth.user.email,
                uid:userAuth.user.uid,
                displayName:userAuth.user.displayName,
                profileUrl:userAuth.user.photoURL
            })
        );
    }
    ).catch((error)=> alert(error));
};

const Register=() =>{
    if(!name){
        return alert("Please enter a full name")
    }

    auth.createUserWithEmailAndPassword(email,password).then(
        (userAuth) => userAuth.user.updateProfile({
            displayName:name,
            photoURL:profilePic,
        }).then(()=> {
            dispatch(login(
                {
                     email:userAuth.user.email,
                     uid:userAuth.user.uid,
                     displayName:name,
                     photoURL:profilePic,
                }
            ))
        }
        
        
        )
    ).catch((error)=>alert(error));
};


  return (
    <div className='login'>
      <img src="https://images.unsplash.com/photo-1592181572975-1d0d8880d175?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2079&q=80" alt='img'/>


      <form>
      <input value={name } onChange={(e) =>{setName(e.target.value)}}
      type='text' 
      placeholder='Full Name(required if registering)'/>
      <input
      value={profilePic} onChange={(e)=> {setprofilePic(e.target.value)}}
       type='text' 
       placeholder='imgUrl(optional)' />
      <input 
      value={email} onChange={(e)=> {setEmail(e.target.value)}}
       type='text' 
       placeholder='email' />
      <input 
      value={password} onChange={(e)=> {setPassword(e.target.value)}}
      type='password' 
      placeholder='password' />
      <button onClick={loginToApp}>Sign in</button>
      <p>Not a member
      <span className='login-register'onClick={Register}>Register Now</span>
      </p>
      </form>
    </div>

  )
}

export default Login;
