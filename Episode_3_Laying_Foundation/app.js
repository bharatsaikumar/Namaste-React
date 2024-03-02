import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = <h1 className="head">Namaste React from JSX</h1>;

//functional component
const Title = () => (
     <h1>This is Title JSX</h1>
)
const HeadingComponent = () => {
  return (
    <div id="container">
        <Title></Title>
      <h1>Namaste React using Functional Component</h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent></HeadingComponent>);
