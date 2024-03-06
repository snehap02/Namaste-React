import React from "react";

class UserClass extends React.Component { 
  constructor(props){
    super(props);
  }
  render() {
    const {name} = this.props;
    return (
      <div className="user-card">
      {/* <h1>{this.props.name}</h1> */}
        <h2>Name: {name}</h2>
        <h3>Email: sneha.purkayastha@gmail.com</h3>
      </div> 
    );
  }
}

export default UserClass;