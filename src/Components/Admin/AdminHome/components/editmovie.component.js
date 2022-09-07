import React, { Component } from 'react';
import axios from 'axios';

export default class EditMovies extends Component {
  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeImglink = this.onChangeImglink.bind(this);
    this.onChangeDesc = this.onChangeDesc.bind(this);
    this.onChangeEmbed = this.onChangeEmbed.bind(this);
    this.onChangeCat = this.onChangeCat.bind(this);
    this.onChangeYear = this.onChangeYear.bind(this);
    this.onChangeRating = this.onChangeRating.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: '',
      imglink: '',
      desc: '',
      embed: '',
      cat: '',
      year: '',
      rating: '',
      movies: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/movies/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          title: response.data.title,
          imglink: response.data.imglink,
          desc: response.data.desc,
          embed: response.data.embed,
          cat: response.data.cat,
          year: response.data.year,
          rating: response.data.rating
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:5000/movies/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            movies: response.data.map(movie => movie.title),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    })
  }

  onChangeImglink(e) {
    this.setState({
      imglink: e.target.value
    })
  }

  onChangeDesc(e) {
    this.setState({
      desc: e.target.value
    })
  }

  onChangeEmbed(e) {
    this.setState({
      embed: e.target.value
    })
  }

  onChangeCat(e) {
    this.setState({
      cat: e.target.value
    })
  }

  onChangeYear(e) {
    this.setState({
      year: e.target.value
    })
  }
  
  onChangeRating(e) {
    this.setState({
      rating: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const movie = {
      title: this.state.title,
      imglink: this.state.imglink,
      desc: this.state.desc,
      embed: this.state.embed,
      cat: this.state.cat,
      year: this.state.year,
      rating: this.state.rating
    }

    console.log(movie);

    axios.post('http://localhost:5000/movies/update/' + this.props.match.params.id, movie)
      .then(res => console.log(res.data));
  }

  render() {
    return (
    <div>
      <h3>Edit Movie</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Movie Title: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeTitle}>
              {
                this.state.movies.map(function(movie) {
                  return <option 
                    key={movie}
                    value={movie}>{movie}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>Image Link: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.imglink}
              onChange={this.onChangeImglink}
              />
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.desc}
              onChange={this.onChangeDesc}
              />
        </div>

        <div className="form-group">
          <label>Movie Link: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.embed}
              onChange={this.onChangeEmbed}
              />
        </div>

        <div className="form-group">
          <label>Movie Category: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.cat}
              onChange={this.onChangeCat}
              />
        </div>

        <div className="form-group">
          <label>Movie Year: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.year}
              onChange={this.onChangeYear}
              />
        </div>

        <div className="form-group">
          <label>Movie Rating: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.rating}
              onChange={this.onChangeRating}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Edit Movie" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}