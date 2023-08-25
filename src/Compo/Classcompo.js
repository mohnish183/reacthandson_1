import { Component } from "react";
class Classcompo extends Component {
  render() {
    return (
      <div className="container1">
        <h1>This is created using class component</h1>
        <p className="extcss">This is done using external css</p>
        <p style={{ color: "red", fontSize: "20px" }}>
          This is done by using inline css
        </p>
      </div>
    );
  }
}

export { Classcompo };
