import React, {Component, useState} from 'react'
import './Home.css'
import Footer from '../Footer/Footer'
import Logo from '../../Assets/logo2.png'
import { Link } from 'react-router-dom'
import axios from 'axios';

const Movie = props => (
  <a className='Home-card'
    href={props.movie.embed}
    target="_blank">
    <div class="card">
      <img src={props.movie.imglink} alt="" />
      <div class="card-title">{props.movie.title}</div>
      <div class="card-desc">
        {props.movie.desc}<br/><br/>
        Rating: {props.movie.rating}&#9734;<br/>
        Year: {props.movie.year}<br/>
        Genre: {props.movie.cat}
      </div>
    </div>
  </a>
)

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],  
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/movies/')
      .then(Response => {
        this.setState({ movies: Response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  movieList() {
    return this.state.movies.map(currentmovie => {
      return <Movie movie={currentmovie} key={currentmovie._id} />;
    })
  }

  render() {
  return (
    <div className='Home-header'>
      
      <div className='Home-nav'>
        <Link to='/home'>
          <img src={Logo} className='Home-navlogo' />
        </Link>
        <div className='Home-nav2'>
          <Link to='/profile' className='Home-navlinks'></Link>
          <Link to='/' className='Home-navlinks'>Logout</Link>
        </div>
      </div>

      <div className='Home-Row'>
        <input type='search' placeholder='Look for a movie' className='Home-search' />
        <Link className='Home-searchbutton'>Search</Link>
        
      </div>
      <div className='Home-container'>
        All Movies
          <div className='Home-grid'>
            {this.movieList()}
          </div>
      </div>

      <Footer />
    </div>
  )
}
}
