import React, { Component } from "react";
import Button from "./ButtonElem";
import Display from "./DisplayResult";
/* eslint no-eval: 0 */
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: "0",
      lastClicked: undefined,
      storedValue: undefined,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    const btnValue = e.target.getAttribute("name");
    const { displayValue, storedValue, lastClicked } = this.state;

    switch (btnValue) {
      case "AC":
        this.setState({
          displayValue: "0",
          storedValue: undefined,
          lastClicked: undefined,
        });
        break;
      case ".":
        if (displayValue.indexOf(".") === -1) {
          this.setState({
            displayValue: displayValue + btnValue,
          });
        }
        break;
      case "negative":
        this.setState({
          displayValue:
            displayValue.charAt(0) === "-"
              ? displayValue.slice(1)
              : "-" + displayValue,
        });
        break;
      case "=":
        const result = eval(storedValue);
        this.setState({
          displayValue: result,
          storedValue: result,
          lastClicked: btnValue,
        });
        break;
      default:
        const checkForZero =
          displayValue === "0" ? btnValue : displayValue + btnValue;
        this.setState({
          storedValue: checkForZero,
          displayValue: checkForZero,
          lastClicked: btnValue,
        });
        break;
    }
  }
  render() {
    const { storedValue } = this.state;
    return (
      <div className="container">
        <div className="card shadow rounded">
          <Display
            result={this.state.displayValue}
            miniDisplay={storedValue === undefined ? "0" : storedValue}
          />
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
