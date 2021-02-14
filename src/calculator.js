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
    switch (value) {
      case "AC":
        this.setState({
          outputVal: "0",
        });
        break;
      default:
        if (this.state.outputVal === "0") {
          this.setState({
            outputVal: value,
          });
        } else {
          this.setState({
            outputVal: this.state.outputVal + value,
          });
        }
        break;
    }
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
