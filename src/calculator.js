import React, { Component } from "react";
import Button from "./ButtonElem";
import Display from "./DisplayResult";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      outputVal: "0",
      preVal: null,
      sign: "",
      signIsClicked: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
    this.handlePercent = this.handlePercent.bind(this);
    this.handleOperation = this.handleOperation.bind(this);
  }

  handlePercent() {
    const { outputVal } = this.state;
    this.setState({
      outputVal: String(parseFloat(outputVal) / 100),
    });
  }
  handleClear() {
    this.setState({
      outputVal: "0",
      preVal: "",
      sign: "",
    });
  }
  handleClick(e) {
    const value = e.target.innerText;
    const { outputVal, signIsClicked } = this.state;
    signIsClicked
      ? this.setState({ outputVal: value, signIsClicked: false })
      : this.setState({
          outputVal: outputVal === "0" ? value : outputVal + value,
        });
  }
  handleDecimal() {
    const { outputVal, signIsClicked } = this.state;
    if (signIsClicked) {
      this.setState({
        outputVal: ".",
        signIsClicked: false,
      });
    } else if (!outputVal.includes(".")) {
      this.setState({
        outputVal: outputVal + ".",
        signIsClicked: false,
      });
    }
  }

  handleOperation(signClicked) {
    const { outputVal, preVal, sign } = this.state;

    const calculate = (sign, num1, num2) => {
      switch (sign) {
        case "+":
          return num1 + num2;
        case "-":
          return num1 - num2;
        case "*":
          return num1 * num2;
        case "/":
          return num1 / num2;
        case "=":
          return num2;
        default:
          return;
      }
    };
    if (!preVal) {
      this.setState({
        preVal: parseFloat(outputVal),
      });
    } else if (sign) {
      const firstNum = preVal;
      const secondNum = parseFloat(outputVal);
      const result = calculate(sign, firstNum, secondNum);

      this.setState({
        preVal: result,
        outputVal: String(result),
        signIsClicked: false,
      });
    }
    this.setState({
      sign: signClicked,
      signIsClicked: true,
    });
  }

  render() {
    return (
      <div className="container">
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        <div className="card shadow rounded">
          <Display result={this.state.outputVal} />
          <Button
            handleClick={this.handleClick}
            handleDecimal={this.handleDecimal}
            handleClear={this.handleClear}
            handlePercent={this.handlePercent}
            handleOperation={this.handleOperation}
          />
        </div>
      </div>
    );
  }
}

export default Calculator;
