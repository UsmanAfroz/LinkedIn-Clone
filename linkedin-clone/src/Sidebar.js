import React from 'react'
import "./Sidebar.css";
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';
function Sidebar() {

  // we accessed the user information here
  const user=useSelector(selectUser);

    const recentItem= (topic) =>(
    
        <div className='sidebar-recentItem'>
        <span className='sidebar-hash'>#</span>
        <p>{topic}</p>
        
        </div>
    );
    
  return (
    <div className='sidebar'>
      <div className='sidebarTop'>
      <img src='https://images.unsplash.com/photo-1621091211034-53136cc1eb32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80' alt='sidebar img' />
      <Avatar src={user.photoUrl} className='sidebar-avatar'>{user.email[0]}</Avatar>
      <h1>{user.displayName}</h1>
      <h4>{user.email}</h4>
      
      </div>

      <div className='sidebar-stats'>
      <div className='sidebar-stat'>
      <p>View</p>
      <p className='sidebar-statNumber'>423</p>
      </div>

      <div className='sidebar-stat'>
      <p>View</p>
      <p className='sidebar-statNumber'>423</p>
      </div>

      <div className='sidebarBottom'>
      <p>Recent</p>
      {recentItem('Programming')}
      {recentItem('Software')}
      {recentItem('Engineering')}
      {recentItem('Design')}
      {recentItem('Developer')}
      </div>
      
      </div>
    </div>
  )
}

export default Sidebar
