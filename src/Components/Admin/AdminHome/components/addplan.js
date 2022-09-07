import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../AdminHome.css';

const AddPlan = () => {
  const [plan,setPlan] = useState({
      name:"",
      price:"",
      validity: ""
  })
  const handleChange = e =>{
  const {name,value} = e.target
  setPlan({
  ...plan,//spread operator 
  [name]:value
  })
  }
//register function 
 const egister = ()=>{
 const {name,price,validity} = plan
 if (name && price && validity){
  axios.post("http://localhost:5000/plans/Register", plan)
  .then(
    res=>console.log(res), 
    alert("Plan Successfully Added"),
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
          Create New Plan
                          <input type="text" 
                            className="Admin-addinput" placeholder="Enter Plan Name"
                            name="name" value={plan.name} onChange={handleChange}>
                          </input>

                          <input type="text" 
                            className="Admin-addinput" placeholder="Enter Price of the Plan"
                            name="price" value={plan.price} onChange={handleChange}>
                          </input>

                          <input type="text" 
                            className="Admin-addinput" placeholder="Enter Validity of the Plan"
                            name="validity" value={plan.validity} onChange={handleChange}>
                          </input>
    
                          <Link className='Admin-addbtn' onClick={egister}>
                            Submit
                          </Link>
                        </form>
    </div>
  )
  }


export default AddPlan