import React from "react";
import "./movieData.css";

const image = (props) => {
    return <img src={props.url} style={props.style} className={props.className} alt=""></img>
}

export default image;