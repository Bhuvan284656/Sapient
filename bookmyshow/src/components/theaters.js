import React, { Component } from "react";
import TheaterListData from "../temp.json";
import Theater from "./theaterData";
import "./theaters.css";

class Theaters extends Component {
  state = {
    theaterList: [],
    iserror: false,
    errorMessage: ""
  };

  componentDidMount() {
    //Api to get Theater List using Movie ID : this.props.match.params.id
    if (!(this.props.match && this.props.match.params && this.props.match.params.id)) {
      this.setState({ iserror: true, errorMessage: "Movie Not Seleted." });
      return;
    }
    this.setState({ theaterList: TheaterListData.theaterList });
  }

  render() {
    const {theaterList, iserror, errorMessage} = this.state;
    let list = null;

    if(theaterList && !iserror)
      list = theaterList.map(data => <Theater key={data.id} {...data}></Theater>)

    if(iserror)
      list = <div className="errorMessage">{errorMessage}</div>

    return <div className="theaterList">{list}</div>;
  }
}

export default Theaters;
