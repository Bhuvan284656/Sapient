import React from "react";
import Image from "./image";
import "./movieData.css";
import { Link } from "react-router-dom";

const movie = props => {
  return (<Link to={`/Theaters/${props.imdbID}`}>
            <div className="movieData">
              <div className="movieImage">
                <Image url={props.Poster}></Image>
              </div>
              <div className="movieTitle">
                <label>{props.Title}</label>
                <label className="movieYear">Year: {props.Year}</label>
              </div>
            </div>
          </Link>);
};

export default movie;
