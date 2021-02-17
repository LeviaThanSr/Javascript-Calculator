import React, { Component } from "react";

class Display extends Component {
  render() {
    const { miniDisplay, Display } = this.props;
    return (
      <div className="card-header text-end">
        <h4 className="miniScreen">{miniDisplay}</h4>
        <h1 id="display" className="Screen m-0">
          {Display}
        </h1>
      </div>
    );
  }
}
export default Display;
