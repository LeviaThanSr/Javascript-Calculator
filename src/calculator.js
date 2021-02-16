import React, { Component } from "react";
import Button from "./ButtonElem";
import Display from "./DisplayResult";
/* eslint no-eval: 0 */
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      outputVal: "0",
      calc: undefined,
      operator: undefined,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    const value = e.target.getAttribute("name");
    const { outputVal, operator, calc } = this.state;
    if (!Number.isNaN(Number(value))) {
      if (outputVal === "0") {
        this.setState({
          outputVal: value,
        });
      } else {
        this.setState({
          outputVal: outputVal + value,
        });
      }
      return;
    }
    switch (value) {
      case "AC":
        this.setState({
          outputVal: "0",
          calc: "",
          operator: "",
        });
        break;
      case ".":
        if (outputVal.indexOf(".") === -1) {
          this.setState({
            outputVal: outputVal + value,
          });
        }
        break;
      case "negative":
        this.setState({
          outputVal:
            outputVal.charAt(0) === "-" ? outputVal.substr(1) : "-" + outputVal,
        });
        break;
      default:
        if (!operator) {
          this.setState({
            operator: value,
            calc: outputVal,
            outputVal: "",
          });
        } else if (value === "=") {
          const result = eval(`${calc} ${operator} ${outputVal}`);
          this.setState({
            operator: undefined,
            calc: result,
            outputVal: result,
          });
        } else {
          this.setState({
            operator: value,
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
        <pre style={{ position: "absolute", left: 100, top: 300 }}>
          {JSON.stringify(this.state, null, 2)}
        </pre>
      </div>
    );
  }
}

export default Calculator;
