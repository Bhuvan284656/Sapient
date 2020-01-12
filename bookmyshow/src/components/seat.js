import React, { Component } from "react";
import "./seat.css";
import { connect } from "react-redux";
import { ADD_SEAT, REMOVE_SEAT } from "../store/actions";

class seat extends Component {
  onSeatSelect = (seatNo, isSeatSeleted) => {
    if (isSeatSeleted)
      this.props.dispatch({ type: REMOVE_SEAT, value: seatNo });
    else this.props.dispatch({ type: ADD_SEAT, value: seatNo });
  };

  render() {
    console.log(this.props);
    const seatNo = this.props.row + "-" + this.props.column;
    let isSeatSeleted = false;
    if (this.props.seats) {
      const index = this.props.seats.indexof(seatNo);
      isSeatSeleted = index > 0;
    }
    return (
      <div
        className={`seat`}
        onClick={() => this.onSeatSelect(seatNo, isSeatSeleted)}
      >
        <div className={`seatDetails ${isSeatSeleted ? "SelectedSeat" : ""}`}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

const manageStatetoPops = state => {
  console.log(state);
  return { seats: state.seats };
};

export default connect(manageStatetoPops)(seat);
