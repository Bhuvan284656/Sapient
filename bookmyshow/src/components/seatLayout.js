import React, { Component } from "react";
import "./seatLayout.css";
import Seat from "./seat";
import { connect } from "react-redux";
import { ADD_SEAT, REMOVE_SEAT } from "../store/actions";

class SeatLayout extends Component {
  onSeatSelect = (seatNo, isSeatSeleted) => {
    if (isSeatSeleted)
      this.props.dispatch({ type: REMOVE_SEAT, value: seatNo });
    else this.props.dispatch({ type: ADD_SEAT, value: seatNo });
  };

  render() {
    // const movieID = this.props.match.params.id;
    // const theaterID = this.props.match.params.theaterID;
    // const theaterTiming = this.props.match.params.time;

    const rows = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N"
    ];
    const columns = [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20"
    ];

    let selectedSeats = this.props.seats;

    if (!selectedSeats) selectedSeats = [];
    const layout = rows.map(val => (
      <tr key={val}>
        <td>{val}</td>
        {columns.map(col => {
          const seatNo = val + "-" + col;
          const isSeatSeleted = selectedSeats.indexOf(seatNo) > -1;
          return (
            <td key={col}>
              <Seat
                isSelected={isSeatSeleted}
                onSeatSelect={() => this.onSeatSelect(seatNo, isSeatSeleted)}
              >
                {col}
              </Seat>
            </td>
          );
        })}
      </tr>
    ));
    // if(this.props.seats)
    //     console.log(this.props.seats.join(", "));
    return (
      <div style={{ textAlign: "center" }}>
        <div className="seatLayout">
          <table>
            <tbody>{layout}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

const manageStateToProps = state => {
  return { seats: state.seats };
};

export default connect(manageStateToProps)(SeatLayout);
