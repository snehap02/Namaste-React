import { useState } from "react";

const User = (props) => {
    const {name} = props;

    const [count] = useState(0);

  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <h2>Name: {name}</h2>
      <h3>Email: sneha.purkayastha@gmail.com</h3>
    </div>
  );
};

export default User;
