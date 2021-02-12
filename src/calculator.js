import React, { Component } from "react";
import Button from "./ButtonElem";
import Display from "./DisplayResult";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNum: "0",
      secondNum: "",
      operatorSign: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    const value = e.target.innerText;

    switch (value) {
      case "AC":
        this.setState({ firstNum: "0" });
        break;
      case ".":
        !this.state.firstNum.includes(".")
          ? this.setState({ firstNum: this.state.firstNum + value })
          : this.setState({ firstNum: this.state.firstNum });
        break;
      default:
        this.state.firstNum === "0"
          ? this.setState({ firstNum: value })
          : this.setState({ firstNum: this.state.firstNum + value });
        break;
    }
  }
  render() {
    return (
      <div className="container">
        <div className="card shadow rounded">
          <Display result={this.state.firstNum} />
          <Button handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default Calculator;
