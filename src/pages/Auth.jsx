import { Link } from "react-router-dom";
import Button from "../components/UI/Button";

const Auth = () => {
  return (
    <div>
      <Link to="/">صفحه اول</Link>
      <h1>ورود / عضویت</h1>
      <Button variant="fill">ورود</Button>
      <Button variant="outline">ورود</Button>
    </div>
  );
};

export default Auth;
