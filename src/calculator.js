import React, { Component } from "react";
import Button from "./ButtonElem";
import Display from "./DisplayResult";
/* eslint no-eval: 0 */
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      outputVal: "0",
      preVal: "",
      operator: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    const value = e.target.innerText;
    const { outputVal, operator, preVal } = this.state;
    if (!Number.isNaN(Number(value))) {
      if (this.state.outputVal === "0") {
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
          preVal: "",
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
      default:
        if (!operator) {
          this.setState({
            operator: value,
            preVal: outputVal,
            outputVal: "",
          });
        } else {
          const result = eval(`${preVal} ${operator} ${outputVal}`);
          this.setState({
            operator: value,
            preVal: result,
            outputVal: value === "=" ? result : "0",
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
