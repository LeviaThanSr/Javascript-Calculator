import React, { Component } from "react";
class Button extends Component {
  render() {
    const { handleClick } = this.props;
    return (
      <div className="card-body">
        <div
          className="number btn btn-danger large"
          id="clear"
          name="AC"
          onClick={handleClick}
        >
          AC
        </div>
        <div
          className="number btn btn-secondary"
          id="sign"
          name="negative"
          onClick={handleClick}
        >
          <span name="negative" onClick={handleClick}>
            &#177;
          </span>
        </div>
        <div
          className="number btn btn-secondary"
          id="divide"
          name="/"
          onClick={handleClick}
        >
          <span name="/" onClick={handleClick}>
            &divide;
          </span>
        </div>
        <div
          className="number btn btn-primary"
          id="seven"
          name="7"
          onClick={handleClick}
        >
          7
        </div>
        <div
          className="number btn btn-primary"
          id="eight"
          name="8"
          onClick={handleClick}
        >
          8
        </div>
        <div
          className="number btn btn-primary"
          id="nine"
          name="9"
          onClick={handleClick}
        >
          9
        </div>
        <div
          className="number btn btn-secondary"
          id="multiply"
          name="*"
          onClick={handleClick}
        >
          <span name="*" onClick={handleClick}>
            &times;
          </span>
        </div>
        <div
          className="number btn btn-primary"
          id="four"
          name="4"
          onClick={handleClick}
        >
          4
        </div>
        <div
          className="number btn btn-primary"
          id="five"
          name="5"
          onClick={handleClick}
        >
          5
        </div>
        <div
          className="number btn btn-primary"
          id="six"
          name="6"
          onClick={handleClick}
        >
          6
        </div>
        <div
          className="number btn btn-secondary"
          id="subtract"
          name="-"
          onClick={handleClick}
        >
          <span name="-" onClick={handleClick}>
            &minus;
          </span>
        </div>
        <div
          className="number btn btn-primary"
          id="one"
          name="1"
          onClick={handleClick}
        >
          1
        </div>
        <div
          className="number btn btn-primary"
          id="two"
          name="2"
          onClick={handleClick}
        >
          2
        </div>
        <div
          className="number btn btn-primary"
          id="three"
          name="3"
          onClick={handleClick}
        >
          3
        </div>
        <div
          className="number btn btn-secondary"
          id="add"
          name="+"
          onClick={handleClick}
        >
          <span name="+" onClick={handleClick}>
            &#43;
          </span>
        </div>
        <div
          className="number btn btn-primary"
          id="decimal"
          name="."
          onClick={handleClick}
        >
          .
        </div>
        <div
          className="number btn btn-primary"
          id="zero"
          name="0"
          onClick={handleClick}
        >
          0
        </div>
        <div
          className="number btn btn-success large"
          id="equals"
          name="="
          onClick={handleClick}
        >
          <span name="=" onClick={handleClick}>
            &#61;
          </span>
        </div>
      </div>
    );
  }
}

export default Button;
