import React from "react";
import ReactDOM from "react-dom/client";

const container = React.createElement(
  "h1",
  { id: "heading1" },
  "This is Episode 3 of Namaste React"
);
console.log(container);

//jsx code
const jsxConatiner = (
  <h1 className="heading1">This is Episode 3 of Namaste React using jsx</h1>
);
// console.log(jsxConatiner);

//React Components ----- 2 types
/*
1) Class based components ---- OLD way ---- in the later videos
2) Functional components ---- NEW way ⬇️
*/
// const HeadingComponents = () => {
//   return (
//     <h1>React functional component</h1>
//   )
// }
const HeadingComponents = () => (
  <div id="container">
    <h1>React functional component</h1>;
  </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(container);
root.render(container);
