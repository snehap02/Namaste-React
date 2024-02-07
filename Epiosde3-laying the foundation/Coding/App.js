import React from "react";
import ReactDOM from "react-dom/client";

const container =  React.createElement("h1", {id: "heading1"}, "This is Episode 3 of Namaste React");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);