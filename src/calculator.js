import React, { Component } from "react";
import Button from "./ButtonElem";
import Display from "./DisplayResult";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      output: "0",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
    this.handlePercent = this.handlePercent.bind(this);
  }
  handleClick(e) {
    const value = e.target.innerText;
    this.setState({
      output: this.state.output === "0" ? value : this.state.output + value,
    });
  }
  handleDecimal() {
    if (!this.state.output.includes(".")) {
      this.setState({
        output: this.state.output + ".",
      });
    }
  }
  handlePercent() {
    this.setState({
      output: String(parseFloat(this.state.output) / 100),
    });
  }
  handleClear() {
    this.setState({
      output: "0",
    });
  }
  render() {
    return (
      <div className="container">
        <div className="card shadow rounded">
          <Display result={this.state.output} />
          <Button
            handleClick={this.handleClick}
            handleDecimal={this.handleDecimal}
            handleClear={this.handleClear}
            handlePercent={this.handlePercent}
          />
        </div>
      </div>
    );
  }
}

export default Calculator;
