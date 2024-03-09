import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("parent mount");
  }

  render() {
    // console.log("Parent Render");
    return (
      <div className="user-card-details">
        <h1>About Class Based Component</h1>

        <UserClass
          name={"Sneha Purkayastha (is using Class based component)"}
        />
      </div>
    );
  }
}

export default About;
