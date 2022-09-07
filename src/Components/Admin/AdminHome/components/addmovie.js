import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../AdminHome.css'

const AddMovie = () => {
  const [movie,setMovie] = useState({
      title:"",
      imglink:"",
      desc: "",
      embed: "",
      cat: "",
      year: "",
      rating: "",
  })
  const handleChange = e =>{
  const {name,value} = e.target
  setMovie({
  ...movie,//spread operator 
  [name]:value
  })
  }
//register function 
 const egister = ()=>{
 const {title,imglink,desc,embed,cat,year,rating} = movie
 if (title && imglink && desc && embed && cat && year && rating){
  axios.post("http://localhost:5000/movies/createmovie",movie )
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
        <form className="Admin-addcontainer">
          Add new Movie
                          <input type="text" 
                            className="Admin-addinput" placeholder="Enter Movie Title"
                            name="title" value={movie.title} onChange={handleChange}>
                          </input>

                          <input type="text" 
                            className="Admin-addinput" placeholder="Enter Image Link"
                            name="imglink" value={movie.imglink} onChange={handleChange}>
                          </input>

                          <input type="text" 
                            className="Admin-addinput" placeholder="Enter Movie Description"
                            name="desc" value={movie.desc} onChange={handleChange}>
                          </input>

                          <input type="text" 
                            className="Admin-addinput" placeholder="Enter Movie Link"
                            name="embed" value={movie.embed} onChange={handleChange}>
                          </input>

                          <input type="text" 
                            className="Admin-addinput" placeholder="Enter Movie Category"
                            name="cat" value={movie.cat} onChange={handleChange}>
                          </input>

                          <input type="text" 
                            className="Admin-addinput" placeholder="Enter Year of Movie"
                            name="year" value={movie.year} onChange={handleChange}>
                          </input>

                          <input type="text" 
                            className="Admin-addinput" placeholder="Enter Movie Rating"
                            name="rating" value={movie.rating} onChange={handleChange}>
                          </input>
    
                          <Link className='Admin-addbtn' onClick={egister}>
                            Submit
                          </Link>
                        </form>
    </div>
  )
  }


export default AddMovie