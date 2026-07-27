import React from "react";
import ReactDOM from "react-dom/client";

console.log("=====================================================");
console.log("Learning React js");
console.log("=====================================================");
console.log(React);
console.log(ReactDOM);
console.log("=====================================================");

const greetingEle = React.createElement(
  "h2",
  { id: "greet" },
  "Welcome to React World!",
);
console.log(greetingEle);

const renderEle = ReactDOM.createRoot(document.querySelector("#root"));
console.log(renderEle);

console.log("=====================================================");

renderEle.render(greetingEle);
