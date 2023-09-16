import React, { useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Widgets from './widgets';
import { auth } from './firebase';
import Feed from './Feed';
import './App.css';
import Login from "./Login.js";
import { login, logout, selectUser } from './features/counter/userSlice';
import { useDispatch, useSelector } from 'react-redux';




function App() {

  const user=useSelector(selectUser);
   const dispatch=useDispatch();
// eslint-disable-next-line react-hooks/exhaustive-deps
   useEffect(()=> {
    auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        dispatch(
          login({
            email:userAuth.email,
            uid:userAuth.uid,
            displayName:userAuth.displayName,
            photoUrl:userAuth.photoUrl,
          })
        );
      } else {
        // user is logged out
        dispatch(logout());
        
      }
    });
   }, [dispatch]);
   
  return (
    
    <div className="app">

      <Header />

      {!user ? (
        <Login />
        ): (
        <div className='app-body'>
      
        <Sidebar />
        
        <Feed />

        <Widgets />

    
  
        </div>
      )}
       
    </div>
  );
}

export default App;
