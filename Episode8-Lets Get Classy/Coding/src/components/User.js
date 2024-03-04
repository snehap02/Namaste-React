const User = (props) => {
    const {name} = props;
  return (
    <div className="user-card">
      <h2>Name: {name}</h2>
      <h3>Email: sneha.purkayastha@gmail.com</h3>
    </div>
  );
};

export default User;
