import { useState } from "react";

const User = (props) => {
    const {name} = props;

    const [count, setCount] = useState(0);

    const counting = () =>{
      setCount(count+1);
    }

  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <button onClick={counting}>Click to increment</button>
      <h2>Name: {name}</h2>
      <h3>Email: sneha.purkayastha@gmail.com</h3>
    </div>
  );
};

export default User;
