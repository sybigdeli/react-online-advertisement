import Button from "../components/UI/Button";
import AppleBadge from "../assets/icons/apple-app-store-badge 1.svg";
import GoogleBadge from "../assets/icons/Google_Play_Store_badge_EN 1.svg";
import Search from "../components/UI/Search";
import CommunityImage from "../assets/images/Community.png";
import CommunityIcon from "../assets/icons/Group.svg";
import ImageUser1 from "../assets/images/user1.svg";
import ImageUser2 from "../assets/images/user2.svg";
import ImageUser3 from "../assets/images/user3.svg";
import ImageUser4 from "../assets/images/user4.svg";
import ImageUser5 from "../assets/images/user5.svg";

import CategoryRow from "../components/UI/CategoryRow";
import Tags from "../components/UI/Tags";
import Logo from "../components/UI/Logo";
import ProfileButton from "../components/UI/ProfileButton";
import Sorting from "../components/UI/Sorting";
import Day from "../components/UI/Day";
import Header from "../components/Header";
import Product from "../components/Product/ProductBox";
import FilterRow from "../components/UI/FilterRow";
import Category from "../components/UI/Category";
import ForumLine from "../components/UI/ForumLine";
import Footer from "../components/Footer";
function Ui() {
  return (
    <div>
      <Search varient={"کتاب"}>دوچرخه</Search>
      <Button variant="fill">ورود</Button>
      <Button variant="outline">ورود</Button>
      <img src={AppleBadge} />
      <img src={GoogleBadge} />
      <CategoryRow image={CommunityIcon} text="Community" />
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
      <div>
        <Product>250$</Product>
      </div>
      <FilterRow filterName="Miles from home" />

      <div className="w-64">
        <Category image={CommunityImage} text="Community" />
      </div>
      <ForumLine
        imageUser1={ImageUser1}
        imageUser2={ImageUser2}
        imageUser3={ImageUser3}
        imageUser4={ImageUser4}
        imageUser5={ImageUser5}
      />
      <Category image={CommunityImage} text="Community"/>
      <Footer/>
      

    </div>
  );
}

export default Ui;
