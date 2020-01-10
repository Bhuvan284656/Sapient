import React, { Component } from "react";
import {movie} from "../apis/ombd";
import MovieData from "./movieData";

class SelectedMovie extends Component{
    state = {
        movie={}
    }
    componentDidMount(){
        movie(this.props.id)
        .then(val => this.setState({movie:val}))
        .catch()
    }

    render(){
        return <MovieData {...this.state.movie}></MovieData>
    }
}

export default SelectedMovie;