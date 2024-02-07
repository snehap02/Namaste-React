//~~~~~~~~~~~~~~~~~~~~~~ CORE REACT ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const heading = React.createElement(
  "h1",
  { id: "head", xyz: "abc" },
  "Hello World! from React :)"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// render heading inside root
//   root.render(heading);

//🔴🟡 create the following nested structure of html in react
/*
  <div id="parent">
    <div id="child">
      <h1></h1>
    </div>
  </div>
  */
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "Hello I am heading 1 from React")
  )
);

//   root.render(parent);

//🔴🟡 The third argument will be inside an array (array of children) if you have to create any sibling ---------- same for the child if you have two children put it inside array
/* <div id="p">
    <div id="c">
    🟡 siblings
      <h1></h1>
      <h2></h2>
    </div>
    <div id="c2">
    🟡 siblings
      <h1></h1>
      <h2></h2>
    </div>
  </div>
  */
const p = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello I am heading 1 from React"),
    React.createElement("h2", {}, "Hello I am heading 2 from React"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello I am heading 1 from React"),
    React.createElement("h2", {}, "Hello I am heading 2 from React"),
  ]),
]);

root.render(p);
