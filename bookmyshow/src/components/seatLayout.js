import React, { Component } from "react";
import "./seatLayout.css";
import Seat from "./seat";

class SeatLayout extends Component {
  state = {
    movies: []
  };

  componentDidMount() {

  }

  render() {
    const movieID = this.props.match.params.id;
    const theaterID = this.props.match.params.theaterID;
    const theaterTiming = this.props.match.params.time;

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

    const layout = rows.map(val => (
      <tr key={val}>
        <td>{val}</td>
        {columns.map(col => (
          <td key={col}>
            <Seat key={col} row={val} col={col}>
              {col}
            </Seat>
          </td>
        ))}
      </tr>
    ));

    return (
      <div style={{ textAlign: "center" }}>
        <div className="seatLayout">
          <table><tbody>{layout}</tbody></table>
        </div>
      </div>
    );
  }
}

export default SeatLayout;
