import React, { Component } from "react";
import Button from "./ButtonElem";
import Display from "./DisplayResult";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      outputVal: "0",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    const value = e.target.innerText;
    this.setState({
      outputVal: this.state.outputVal + value,
    });
  }
  render() {
    return (
      <div className="container">
        <div className="card shadow rounded">
          <Display result={this.state.outputVal} />
          <Button handleClick={this.handleClick} />
        </div>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </div>
    );
  }
}

export default Calculator;
