import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>About Class Based Component</h1>

        <UserClass
          name={"Sneha Purkayastha (is using Class based component)"}
        />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About Us Page</h1>

//       <UserClass name={"Sneha Purkayastha (is using Class based component)"}/>
//     </div>
//   )
// }

export default About;
