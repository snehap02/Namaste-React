import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userCard: {
        name: "Random User",
        location: "Random Location",
      },
    };
    // this.state = {
    //   count: 0,
    // };
    // console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + "child mount");
    const data = await fetch("https://api.github.com/users/snehap02");
    const json = await data.json();

    console.log(json);
    this.setState({
      userCard: json
    })
  }
  componentDidUpdate(){
    console.log("Component did upadate");
  }

  componentWillUnmount(){
    console.log("component will unmount");
  }

  render() {
    // const { name } = this.props;
    const {name, location} = this.state.userCard;
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
        <h2>Location: {location}</h2>
        <h3>Email: sneha.purkayastha@gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;
