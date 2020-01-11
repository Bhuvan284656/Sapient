import React, { Component } from "react";
import { movieList } from "../apis/ombd";
import Movie from "./movieData";
import "./movies.css"

class Movies extends Component {
  state = {
    movies: [],
    error: "",
    iserror: false
  };

  componentDidMount() {
    movieList()
      .then(({ data }) => {
        this.setState({
          movies: data.Search,
          iserror: false
        });
      })
      .catch(() => this.setState({ error: "Failed to get Movie List." , iserror: true }));
  }

  render() {
    const { movies, error, iserror } = this.state;
    let list = null;

    if (movies && !iserror)
      list = movies.map(val => <Movie key={val.imdbID} {...val}></Movie>);

    if(iserror)
      list = <div className="errorMessage">{error}</div>

    return <div className={"moviesList"}>{list}</div>;
  }
}

export default Movies;
