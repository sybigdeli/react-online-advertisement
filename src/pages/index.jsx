import { Link } from "react-router-dom";
import Tags from "../components/UI/Tags";

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
        <li>
          <div className="w-[124px] h-9">
            <Tags tagName={"Mountain Bikes"} />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default index;
