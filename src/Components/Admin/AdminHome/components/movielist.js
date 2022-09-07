import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../AdminHome.css';

const Movie = props => (
  <tr>
    <td>{props.movie.title}</td>
    <td>{props.movie.rating}</td>
    <td>{props.movie.year}</td>
    <td>{props.movie.cat}</td>
    <td>
      <Link to={"/editmovie/"+props.movie._id}></Link> | <a href="#" onClick={() => { props.deleteMovie(props.movie._id) }}>delete</a>
    </td>
  </tr>
)

export default class MovieList extends Component {
  constructor(props) {
    super(props);

    this.deleteMovie = this.deleteMovie.bind(this)

    this.state = {movies: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/movies/')
      .then(response => {
        this.setState({ movies: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteMovie(id) {
    axios.delete('http://localhost:5000/movies/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      movies: this.state.movies.filter(el => el._id !== id)
    })
  }

  movieList() {
    return this.state.movies.map(currentmovie => {
      return <Movie movie={currentmovie} deleteMovie={this.deleteMovie} key={currentmovie._id}/>;
    })
  }

  render() {
    return (
      <div className='Admin-header'>
        <Link className='Admin-signout' to="/AdminHome">
            &#8592; Go back
        </Link>
        <h3>Movie List:</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Title</th>
              <th>Rating</th>
              <th>Year</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            { this.movieList() }
          </tbody>
        </table>
      </div>
    )
  }
}