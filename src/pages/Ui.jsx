import Button from "../components/UI/Button";
import AppleBadge from '../assets/icons/apple-app-store-badge 1.svg'
import GoogleBadge from '../assets/icons/Google_Play_Store_badge_EN 1.svg'
function Ui() {
  return (
    <div>
      <Button variant="fill">ورود</Button>
      <Button variant="outline">ورود</Button>
      <img src={AppleBadge} />
      <img src={GoogleBadge} />
    </div>
  );
}

export default Ui;
