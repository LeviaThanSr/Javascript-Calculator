import React, { Component } from "react";

class Display extends Component {
  render() {
    return (
      <div className="card-header text-end" id="display">
        <h1 className="screen m-0">{this.props.result}</h1>
      </div>
    );
  }
}
export default Display;
