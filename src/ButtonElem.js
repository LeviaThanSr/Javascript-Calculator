import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <div className="card-body">
        <div
          className="number btn btn-danger large"
          id="clear"
          onClick={this.props.handleClear}
        >
          AC
        </div>
        <button
          className="number btn btn-secondary"
          id="percent"
          onClick={this.props.handlePercent}
        >
          <span>&#37;</span>
        </button>
        <button
          className="number btn btn-secondary"
          id="divide"
          onClick={this.props.handleClick}
        >
          <span>&#247;</span>
        </button>
        <button
          className="number btn btn-primary"
          id="seven"
          onClick={this.props.handleClick}
        >
          7
        </button>
        <button
          className="number btn btn-primary"
          id="eight"
          onClick={this.props.handleClick}
        >
          8
        </button>
        <button
          className="number btn btn-primary"
          id="nine"
          onClick={this.props.handleClick}
        >
          9
        </button>
        <button
          className="number btn btn-secondary"
          id="multiply"
          onClick={this.props.handleClick}
        >
          <span>&#215;</span>
        </button>
        <button
          className="number btn btn-primary"
          id="four"
          onClick={this.props.handleClick}
        >
          4
        </button>
        <button
          className="number btn btn-primary"
          id="five"
          onClick={this.props.handleClick}
        >
          5
        </button>
        <button
          className="number btn btn-primary"
          id="six"
          onClick={this.props.handleClick}
        >
          6
        </button>
        <button
          className="number btn btn-secondary"
          id="subtract"
          onClick={this.props.handleClick}
        >
          <span>&#8722;</span>
        </button>
        <button
          className="number btn btn-primary"
          id="one"
          onClick={this.props.handleClick}
        >
          1
        </button>
        <button
          className="number btn btn-primary"
          id="two"
          onClick={this.props.handleClick}
        >
          2
        </button>
        <button
          className="number btn btn-primary"
          id="three"
          onClick={this.props.handleClick}
        >
          3
        </button>
        <button
          className="number btn btn-secondary"
          id="add"
          onClick={this.props.handleClick}
        >
          <span>&#43;</span>
        </button>
        <button
          className="number btn btn-primary"
          id="zero"
          onClick={this.props.handleClick}
        >
          0
        </button>
        <button
          className="number btn btn-primary"
          id="decimal"
          onClick={this.props.handleDecimal}
        >
          <span>&#8901;</span>
        </button>
        <button
          className="number btn btn-success large"
          id="equals"
          onClick={this.props.handleClick}
        >
          <span>&#61;</span>
        </button>
      </div>
    );
  }
}

export default Button;
