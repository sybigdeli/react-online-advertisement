import { Link } from "react-router-dom";
import Button from "../components/UI/Button";

const Auth = () => {
  return (
    <div>
      <Link to="/">صفحه اول</Link>
      <h1>ورود / عضویت</h1>
      <Button>ورود</Button>
    </div>
  );
};

export default Auth;
