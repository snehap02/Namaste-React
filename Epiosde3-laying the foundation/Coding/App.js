import React from "react";
import ReactDOM from "react-dom/client";

const container = React.createElement(
  "h1",
  { id: "heading1" },
  "This is Episode 3 of Namaste React"
);
console.log(container);

//🟡jsx code
const jsxConatiner = (
  <h1 className="heading1">This is Episode 3 of Namaste React using jsx</h1>
);
// console.log(jsxConatiner);

//🟡React Components ----- 2 types
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

//🟡There are two ways to write functional components but both are same
//One way is without return statement
const WithoutReturn = () => (
  <div>
    <h1>I am here without Return</h1>
  </div>
)
//Another way is to write with return statement
const WithReturn = () => {
  return (
    <div>
      <h1>I am here with Return</h1>
    </div>
  )
}

//🟡React Element vs React components ---- (difference is 1️⃣ React Elements name is written in normal format while React components name is written in camel case conventions with the first letter in uppercase and 2️⃣ whenever we render our React elements we write the name itself in the braces like (element) but when we render React component we do this (<ReactComponent/>))
//React element
const reactElement = (
  <h1>I am a React Element, I don't have any arrow functions , and I want my function name just as any other normal names not in Uppercase</h1>
)
//React component AND
//🟡 What is Component Composition ------ Composing components into one another (its like you have a component and you have to put another component inside the present component)
//Take the above example
const Component = () => { 
  return(
  <div id="container1">
    <h1>Just an example of component composition which is going to enter inside the below ReactComponent</h1>
  </div>
)}
const ReactComponent = () => (
  <div id="container2">
  <Component/>
    <h1>I am a React component, I always sit inside arrow functions and I always have my name in Uppercases</h1>
  </div>
)


//🟡Now that we know how to insert a React component inside another react component ....let's learn how to insert React elements inside react components and moreeeee........
//🔴To write any javascript expression (be it any mathematical expression any functions , arrays, objects, or even a console.log or if you have to pass any React Element inside any React Components or you want to put any react element inside react element, just write that inside curly braces "{}")
const reactEle = (
  <div>
  {reactElement}
    <h1>React Element</h1>
  </div>
)
const ReactComp = () => {
  return (
    <div>
      {/* Below is the another way to using React components . At the end of the day this is also an arrow function so we can use it like this also. So these three types are all same 1️⃣ {ReactComponent()} 2️⃣<ReactComponent/> 3️⃣<ReactComponent></ReactComponent> */}
      {ReactComponent()}
      {<h1>Heading inside curly braces</h1>}
      <h1>{reactEle} is inside React Component</h1>
      {`I am any Javascript expression ${2+2}`}
    </div>
  )
}

//🔴🟡🔵VVI ----> Suppose you are inserting any React Component inside react Element and that react component is defined below that react element , the browser will show you error because the componentis defined with const keyword and you cannot use any const variable before initialization ( so move to the top first then use it)




const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(container);
root.render(<ReactComp/>);
