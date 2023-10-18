import Button from "../components/UI/Button";
import AppleBadge from "../assets/icons/apple-app-store-badge 1.svg";
import GoogleBadge from "../assets/icons/Google_Play_Store_badge_EN 1.svg";
import CategoryRow from "../components/UI/CategoryRow";
import CommunityImage from "../assets/icons/Group.svg";
import Tags from "../components/UI/Tags";
import Logo from "../components/UI/Logo";
import ProfileButton from "../components/UI/ProfileButton";
import Sorting from "../components/UI/Sorting";
function Ui() {
  return (
    <div>
      <Button variant="fill">ورود</Button>
      <Button variant="outline">ورود</Button>
      <img src={AppleBadge} />
      <img src={GoogleBadge} />
      <CategoryRow image={CommunityImage} text="Community" />
      <div className="w-[124px] h-9">
        <Tags tagName={"Mountain Bikes"} />
      </div>
      <Logo />
      <div className="w-36 h-10">
        <ProfileButton />
      </div>
      <Sorting text="Popular"/>
    </div>
  );
}

export default Ui;
