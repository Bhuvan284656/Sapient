import React, { Component } from "react";

class SeatLayout extends Component {
  state = {
    movies: []
  };

  componentDidMount() {}

  render() {    
    const movieID = this.props.match.params.id;
    const theaterID = this.props.match.params.theaterID;
    const theaterTiming = this.props.match.params.time;

    const rows = 10;
    const columns = 30;

      


    return <div>Seat LayOut</div>;
  }
}

export default SeatLayout;
