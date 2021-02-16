import React, { Component } from "react";

class Display extends Component {
  render() {
    return (
      <div className="card-header text-end">
        <h4 className="miniScreen">{this.props.miniDisplay}</h4>
        <h1 id="display" className="Screen m-0">
          {this.props.Display}
        </h1>
      </div>
    );
  }
}
export default Display;
