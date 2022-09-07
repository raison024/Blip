import React, { useState } from 'react';
import './Reg.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Reg = () => {
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
    alert("Registration Successful"),
    window.location = '/plan'
    )
 }
 else{
     alert("invalid input")
 };
}
  return (
    <div>
          <div className='Reg-header'>
            <Navbar />
            <div className='Reg-login'>
              
              <div className="Reg-Container Reg-box1">
                <div className='Reg-loginbox' />
              </div>

              <div className="Reg-Container Reg-box2">
                <div className="Reg-welcomebox">
                  <div className='Reg-welcomecontainer'>
                    <div className="Reg-welcometitle">Registration</div>
                      <div className="Reg-continuetitle">Create a new account</div>
                        
                        <form className="Reg-Column" action='#'>
                          <input type="text" 
                            className="Reg-logininput" placeholder="Enter your Name"
                            name="name" value={user.name} onChange={handleChange}>
                          </input>

                          <input type="text" 
                            className="Reg-logininput" placeholder="Enter your Email ID"
                            name="email" value={user.email} onChange={handleChange}>
                          </input>

                          <input type="password" 
                            className="Reg-logininput" placeholder="Create a Password"
                            name="password" value={user.password} onChange={handleChange}>
                          </input>
    
                          <Link className='Reg-loginbtn' onClick={egister}>
                            Submit
                          </Link>
                        </form>
                  </div>

                </div>
              </div>
            
            </div>
          </div>
          <Footer />
      </div>
  )
  }


export default Reg