import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../AdminHome.css';

const AddUser = () => {
  const [user,setUser] = useState({
      name:"",
      email:"",
      password: ""
  })
  const handleChange = e =>{
  const {name,value} = e.target
  setUser({
  ...user,//spread operator 
  [name]:value
  })
  }
//register function 
 const egister = ()=>{
 const {name,email,password} = user
 if (name && email && password){
  axios.post("http://localhost:5000/users/Register",user )
  .then(
    res=>console.log(res), 
    alert("User Successfully Added"),
    window.location = '/adminhome'
    )
 }
 else{
     alert("invalid input")
 };
}
  return (
    <div className='Admin-header'>
      <Link className='Admin-signout' to="/AdminHome">
            &#8592; Go back
        </Link>
        <form className="Admin-addcontainer" action='#'>
          Create New User
                          <input type="text" 
                            className="Admin-addinput" placeholder="Enter your Name"
                            name="name" value={user.name} onChange={handleChange}>
                          </input>

                          <input type="text" 
                            className="Admin-addinput" placeholder="Enter your Email ID"
                            name="email" value={user.email} onChange={handleChange}>
                          </input>

                          <input type="password" 
                            className="Admin-addinput" placeholder="Create a Password"
                            name="password" value={user.password} onChange={handleChange}>
                          </input>
    
                          <Link className='Admin-addbtn' onClick={egister}>
                            Submit
                          </Link>
                        </form>
    </div>
  )
  }


export default AddUser