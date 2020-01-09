import React, { Component } from "react";
import { movieList } from "../apis/ombd";
import Movie from "./movieData";

class Movies extends Component {
  state = {
    movies: [],
    error: "",
    iserror: false
  };

  componentDidMount() {
    movieList
      .then(({data}) => { console.log(data); this.setState({
                                               movies: data.Search,
                                               iserror: false
                                             });})
      .catch(error => this.setState({ error, iserror: true }));
  }

  render() {
    const { movies, error, iserror } = this.state;
    let list = null;
    
    if (movies)
      list = movies.map(val => <Movie key={val.imdbID} {...val}></Movie>);
    
    return <div>{list}</div>;
  }
}

export default Movies;
