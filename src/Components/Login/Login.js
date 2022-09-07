import React, {useState} from 'react';
import './Login.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';


const Login = ({setLoginUser}) => {

const history = useHistory()
    const [user,setUser] = useState({
        name:"",
        password: ""
    })
    const handleChange = e =>{
    const {name,value} = e.target
    setUser({
    ...user,//spread operator 
    [name]:value
    })
    }
  const login =()=>{
      axios.post("http://localhost:5000/users/Login",user)
      .then(
        res=>{alert(res.data.message)
        setLoginUser(res.data.user)
        if(res.data.message==="Login Success"){
          history.push("/home")
        }
        else{
          history.push("/login")
        }
      })
  }
  return (
    <div>
    <div className='Login-header'>
      <Navbar />
      <div className='Login-Box'>
       
          <div className='Login-title'>Sign In</div>
          <div className='Login-para'>Kindly enter your details</div>
          <form className='Login-container'>
            
            <input type='text' name="email" className='Login-input' placeholder='Enter your Email' 
             value={user.email}  onChange={handleChange} />

            <input type='password' name="password" className='Login-input' placeholder='Enter your Password' 
             value={user.password}  onChange={handleChange} />
            <Link onClick={login} className='Login-submit'>Login</Link> 
          </form>

      </div>   
    </div>
    <Footer />
    </div>
  )
}

export default Login