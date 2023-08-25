import React, { useState, Component } from "react";
import FunctionCompo, { Box1 } from "./FuncCompo";
import { Classcompo } from "./Classcompo";

import "./style.css";
function DisplayData() {
  const [set, setcount] = useState(false);

  return (
    <div className="display">
      <Box1 />
      <button onClick={() => setcount(!set)}>
        To see styling in function component
      </button>
      {set ? <FunctionCompo /> : ""}
    </div>
  );
}

export default DisplayData;

class DisplayComponent extends Component {
  constructor() {
    super();
    this.state = {
      val1: false,
    };
  }

  render() {
    return (
      <>
        <div className="displayclassbtn">
          <button onClick={() => this.setState({ val1: !this.state.val1 })}>
            This see styling in class compo
          </button>
          {this.state.val1 ? <Classcompo /> : ""}
        </div>
      </>
    );
  }
}

export { DisplayComponent };
