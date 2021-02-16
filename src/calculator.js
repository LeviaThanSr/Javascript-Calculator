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
    const operators = ["+", "-", "*", "/"];
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
      case "%":
        this.setState({
          displayValue: String(+displayValue / 100),
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
        var checkingOperation = null;
        operators.includes(lastClicked) && operators.includes(btnValue)
          ? (checkingOperation = displayValue.slice(0, -1) + btnValue)
          : (checkingOperation =
              displayValue === "0" ? btnValue : displayValue + btnValue);
        this.setState({
          storedValue: checkingOperation,
          displayValue: checkingOperation,
          lastClicked: btnValue,
        });
        break;
    }
  }
  render() {
    const { displayValue } = this.state;
    return (
      <div className="container">
        <div className="card shadow rounded">
          <Display Display={displayValue} miniDisplay={displayValue} />
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
