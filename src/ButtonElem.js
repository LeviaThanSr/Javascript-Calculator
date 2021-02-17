import React, { Component } from "react";
class Button extends Component {
  render() {
    const { handleClick, handleName } = this.props;
    return (
      <div className="card-body">
        <button
          className="number btn btn-danger large"
          id="clear"
          name="AC"
          onClick={handleClick}
        >
          AC
        </button>
        <button
          className="number btn btn-secondary"
          id="sign"
          name="LTS"
          onClick={handleName}
        >
          <span name="LTS" onClick={handleName}>
            By
          </span>
        </button>
        <button
          className="number btn btn-secondary"
          id="divide"
          name="/"
          onClick={handleClick}
        >
          <span name="/" onClick={handleClick}>
            &divide;
          </span>
        </button>
        <button
          className="number btn btn-primary"
          id="seven"
          name="7"
          onClick={handleClick}
        >
          7
        </button>
        <button
          className="number btn btn-primary"
          id="eight"
          name="8"
          onClick={handleClick}
        >
          8
        </button>
        <button
          className="number btn btn-primary"
          id="nine"
          name="9"
          onClick={handleClick}
        >
          9
        </button>
        <button
          className="number btn btn-secondary"
          id="multiply"
          name="*"
          onClick={handleClick}
        >
          <span name="*" onClick={handleClick}>
            &times;
          </span>
        </button>
        <button
          className="number btn btn-primary"
          id="four"
          name="4"
          onClick={handleClick}
        >
          4
        </button>
        <button
          className="number btn btn-primary"
          id="five"
          name="5"
          onClick={handleClick}
        >
          5
        </button>
        <button
          className="number btn btn-primary"
          id="six"
          name="6"
          onClick={handleClick}
        >
          6
        </button>
        <button
          className="number btn btn-secondary"
          id="subtract"
          name="-"
          onClick={handleClick}
        >
          <span name="-" onClick={handleClick}>
            &minus;
          </span>
        </button>
        <button
          className="number btn btn-primary"
          id="one"
          name="1"
          onClick={handleClick}
        >
          1
        </button>
        <button
          className="number btn btn-primary"
          id="two"
          name="2"
          onClick={handleClick}
        >
          2
        </button>
        <button
          className="number btn btn-primary"
          id="three"
          name="3"
          onClick={handleClick}
        >
          3
        </button>
        <button
          className="number btn btn-secondary"
          id="add"
          name="+"
          onClick={handleClick}
        >
          <span name="+" onClick={handleClick}>
            &#43;
          </span>
        </button>
        <button
          className="number btn btn-primary"
          id="decimal"
          name="."
          onClick={handleClick}
        >
          .
        </button>
        <button
          className="number btn btn-primary"
          id="zero"
          name="0"
          onClick={handleClick}
        >
          0
        </button>
        <button
          className="number btn btn-success large"
          id="equals"
          name="="
          onClick={handleClick}
        >
          <span name="=" onClick={handleClick}>
            &#61;
          </span>
        </button>
      </div>
    );
  }
}

export default Button;
