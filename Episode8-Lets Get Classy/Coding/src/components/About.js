import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About Us Page</h1>
      <User name={"Sneha Purkayastha (is using functional component)"}/>

      <UserClass name={"Sneha Purkayastha (is using Class based component)"}/>
    </div>
  )
}

export default About;