import Button from "../components/UI/Button";
import AppleBadge from "../assets/icons/apple-app-store-badge 1.svg";
import GoogleBadge from "../assets/icons/Google_Play_Store_badge_EN 1.svg";
import Search from "../components/UI/Search";

import CategoryRow from "../components/UI/CategoryRow";
import CommunityImage from "../assets/icons/Group.svg";
import Tags from "../components/UI/Tags";
import Logo from "../components/UI/Logo";
import ProfileButton from "../components/UI/ProfileButton";
import Sorting from "../components/UI/Sorting";
import Day from "../components/UI/Day";
import Header from "../components/Header";
import FilterRow from "../components/UI/FilterRow";
function Ui() {
  return (
    <div>
      <Search varient={"کتاب"}>دوچرخه</Search>
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
      <Sorting text="Popular" />
      <Day day="SAT" date="18" />
      <Header />
      <FilterRow filterName="Miles from home"/>
    </div>
  );
}

export default Ui;
