import "./style.css";
function Box1() {
  return (
    <div className="divhead">
      <h1>Styling using Function and class based component</h1>
    </div>
  );
}

export { Box1 };

function FunctionCompo() {
  return (
    <div className="functionblock">
      <h1>This is created by using function component</h1>
      <p>This is done by using external css</p>
      <p>This is done by using inline css.</p>
    </div>
  );
}

export default FunctionCompo;
