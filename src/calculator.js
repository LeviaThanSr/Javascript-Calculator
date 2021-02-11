import React from "react";

const Calculator = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header text-end" id="display">
          <h1 className="screen m-0">0</h1>
        </div>
        <div className="card-body row">
          <div className="number btn btn-danger large" id="clear">
            AC
          </div>
          <div className="number btn btn-secondary" id="divide">
            /
          </div>
          <div className="number btn btn-secondary" id="multiply">
            x
          </div>
          <div className="number btn btn-primary" id="seven">
            7
          </div>
          <div className="number btn btn-primary" id="eight">
            8
          </div>
          <div className="number btn btn-primary" id="nine">
            9
          </div>
          <div className="number btn btn-secondary" id="subtract">
            -
          </div>
          <div className="number btn btn-primary" id="four">
            4
          </div>
          <div className="number btn btn-primary" id="five">
            5
          </div>
          <div className="number btn btn-primary" id="six">
            6
          </div>
          <div className="number btn btn-secondary" id="add">
            +
          </div>
          <div className="number btn btn-primary" id="one">
            1
          </div>
          <div className="number btn btn-primary" id="two">
            2
          </div>
          <div className="number btn btn-primary" id="three">
            3
          </div>
          <div className="number btn btn-secondary" id="decimal">
            .
          </div>
          <div className="number btn btn-primary large" id="zero">
            0
          </div>
          <div className="number btn btn-success large" id="equals">
            =
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
