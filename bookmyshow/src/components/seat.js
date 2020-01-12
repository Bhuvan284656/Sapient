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
    const seatNo = this.props.row + "-" + this.props.column;
    const isSeatSeleted = false;
    if (this.props.selectedSeats) {
      const index = this.props.selectedSeats.indexof(seatNo);
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
  return { selectedSeats: state };
};

export default connect(manageStatetoPops)(seat);
