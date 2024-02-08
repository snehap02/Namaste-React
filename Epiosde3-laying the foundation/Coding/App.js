import React from "react";
import ReactDOM from "react-dom/client";

const container = React.createElement(
  "h1",
  { id: "heading1" },
  "This is Episode 3 of Namaste React"
);
console.log(container);

//🔴jsx code
const jsxConatiner = (
  <h1 className="heading1">This is Episode 3 of Namaste React using jsx</h1>
);
// console.log(jsxConatiner);

//🔴React Components ----- 2 types
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

//🔴React Element vs React components ---- (difference is 1️⃣ React Elements name is written in normal format while React components name is written in camel case conventions with the first letter in uppercase and 2️⃣ whenever we render our React elements we write the name itself in the braces like (element) but when we render React component we do this (<ReactComponent/>))
//React element
const reactElement = (
  <h1>I am a React Element, I don't have any arrow functions , and I want my function name just as any other normal names not in Uppercase</h1>
)
//React component
const Component = () => (
  <div id="container1">
    <h1>Just an example of component composition which is going to enter inside the below ReactComponent</h1>
  </div>
)
const ReactComponent = () => (
  <div id="container2">
  <Component/>
    <h1>I am a React component, I always sit inside arrow functions and I always have my name in Uppercases</h1>
  </div>
)

//🔴 What is Component Composition ------ Composing components into one another (its like you have a component and you have to put another component inside the present component)
//Take the above example


const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(container);
root.render(<ReactComponent/>);
