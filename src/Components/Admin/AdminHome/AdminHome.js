import React from 'react';
import { Link } from 'react-router-dom';
import './AdminHome.css';

function AdminHome() {
  return (
    <div className='Admin-header'>
        <Link className='Admin-signout' to="/">
            &#8592; Sign Out
        </Link>
        <div className='Admin-title'>Welcome to the Admin Panel</div>
        <div className='Admin-grid'>
            <Link className='Admin-usercontainer' to='/adduser'>Add a new User</Link>
            <Link className='Admin-usercontainer' to='/userlist'>Manage Users</Link>
            <Link className='Admin-usercontainer' to='/addmovie'>Add a new Movie</Link>
            <Link className='Admin-usercontainer' to='/movielist'>Manage Movies</Link>
            <Link className='Admin-usercontainer' to='/addplan'>Add a new Plan</Link>
            <Link className='Admin-usercontainer' to='/planlist'>Manage Plans</Link>
        </div>
    </div>
  )
}

export default AdminHome