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
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleName = this.handleName.bind(this);
  }
  handleName(e) {
    const btnValue = e.target.getAttribute("name");
    this.setState({
      displayValue: btnValue,
    });
  }
  handleClick(e) {
    const btnValue = e.target.getAttribute("name");
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const operators = ["+", "-", "*", "/"];
    const { displayValue, lastClicked } = this.state;

    switch (btnValue) {
      case "AC":
        this.setState({
          displayValue: "0",
          lastClicked: undefined,
        });
        break;
      case ".":
        const displayValueArr = displayValue.split(/[\\+\-\\*\\/]/);
        if (!displayValueArr[displayValueArr.length - 1].includes(".")) {
          this.setState({
            displayValue: displayValue + ".",
          });
        }
        break;
      case "=":
        const result = eval(displayValue);
        this.setState({
          displayValue: result,
          lastClicked: btnValue,
        });
        break;
      default:
        var checkingOperation = null;

        if (operators.includes(btnValue))
          if (operators.includes(lastClicked) && btnValue !== "-") {
            const lastNumberIndex = displayValue
              .split("")
              .reverse()
              .findIndex((i) => i !== " " && numbers.includes(parseFloat(i)));
            checkingOperation =
              displayValue.slice(0, displayValue.length - lastNumberIndex + 1) +
              ` ${btnValue} `;
          } else {
            checkingOperation = ` ${displayValue} ${btnValue} `;
          }
        else {
          checkingOperation =
            displayValue === "0" ? btnValue : displayValue + btnValue;
        }
        this.setState({
          displayValue: checkingOperation,
        });
        break;
    }
    this.setState({
      lastClicked: btnValue,
    });
  }
  render() {
    const { displayValue } = this.state;
    return (
      <div className="container">
        <div className="card shadow rounded">
          <Display Display={displayValue} miniDisplay={displayValue} />
          <Button handleClick={this.handleClick} handleName={this.handleName} />
        </div>
        {/* <pre style={{ position: "absolute", left: 100, top: 300 }}>
          {JSON.stringify(this.state, null, 2)}
        </pre> */}
      </div>
    );
  }
}

export default Calculator;
