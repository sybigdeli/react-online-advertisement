import { Link } from "react-router-dom";

const index = () => {
  return (
    <div>
      <ul>
        <li>pages:</li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Link to="/Profile">Profile</Link>
        </li>
      </ul>
    </div>
  );
};

export default index;
