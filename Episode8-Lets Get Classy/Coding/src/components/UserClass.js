import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   count: 0,
    // };
    // console.log(this.props.name + "Child Constructor");
  }

  componentDidMount(){
    // console.log(this.props.name + "child mount");
    
  }

  render() {
    const { name } = this.props;
    // const { count } = this.state;

    // console.log(this.props.name + "Child Render");
    return (
      <div className="user-card">
        {/* <h1>{this.props.name}</h1> */}
        {/* <h1>Count: {count}</h1>
        <button onClick={()=>{
          this.setState({
            count: this.state.count + 1
          })
        }}>Increment Count</button> */}
        <h2>Name: {name}</h2>
        <h3>Email: sneha.purkayastha@gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;
