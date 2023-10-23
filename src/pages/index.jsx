import CommunityImage from "../assets/images/Community.png";
import ForSale from "../assets/images/ForSale.png";
import Housing from "../assets/images/Housing.png";
import Jobs from "../assets/images/Jobs.png";
import Services from "../assets/images/Services.png";
import ImageUser1 from "../assets/images/user1.svg";
import ImageUser2 from "../assets/images/user2.svg";
import ImageUser3 from "../assets/images/user3.svg";
import ImageUser4 from "../assets/images/user4.svg";
import ImageUser5 from "../assets/images/user5.svg";
import RightIcon from "../assets/icons/right.svg";
import LeftIcon from "../assets/icons/left.svg";
import ArowRight from "../assets/icons/arrow right.svg";
import MapPin from "../assets/icons/map-pin.svg";

import Header from "../components/Header";
import Search from "../components/UI/Search";
import Category from "../components/UI/Category";
import ForumLine from "../components/UI/ForumLine";
import Day from "../components/UI/Day";
import EventRow from "../components/UI/EventRow";
import Footer from "../components/Footer";
const HomePage = () => {
  return (
    <div>
      <header>
        <Header />
      </header>

      <section className="w-full px-[550px] py-[95px] flex flex-col justify-center items-center gap-[20px] bg-black bg-opacity-60 bg-header-image bg-cover bg-no-repeat">
        <div className="w-fit text-left">
          <span className="text-white text-[46px] font-normal tracking-wide">
            The World's Largest
            <br />
          </span>
          <span className="text-purple-400 text-[46px] font-bold tracking-wide">
            Classifieds Advertisement
          </span>
          <span className="text-white text-[46px] font-normal tracking-wide">
            Website
          </span>
        </div>
        <div className="w-full flex justify-center items-center">
          <Search>
            <div className="flex flex-row items-center justify-center gap-1">
              <p>Austin, TX USA</p>
              <img
                src={MapPin}
                className="opacity-50 flex-col justify-start items-start"
              />
            </div>
          </Search>
        </div>
      </section>

      <section className="w-full flex flex-col justify-center items-center gap-[20px] py-12 px-[80px]">
        <p className="text-center text-neutral-600 text-2xl tracking-tight">
          Some Categories
        </p>

        <div className="w-full flex justify-center items-center gap-[30px]">
          <div className="w-96">
            <Category image={CommunityImage} text="Community" />
          </div>
          <div className="w-96">
            <Category image={ForSale} text="For Sale" />
          </div>
          <div className="w-96">
            <Category image={Housing} text="Housing" />
          </div>
          <div className="w-96">
            <Category image={Jobs} text="Jobs" />
          </div>
          <div className="w-96">
            <Category image={Services} text="Services" />
          </div>
        </div>
      </section>

      <section className="flex flex-row  gap-[29px] py-12 px-[80px]">
        <div className="w-4/12 flex flex-col gap-8">
          <p className="text-center text-neutral-600 text-2xl leading-tight tracking-tight">
            Calender
          </p>

          <div className="flex-grow  bg-white rounded-[20px] shadow border border-gray-200 p-[33px] flex flex-col justify-center items-center gap-4">
            <div className="w-full flex justify-between items-center">
              <p className="text-center text-neutral-600 text-lg tracking-tight">
                October 2021
              </p>
              <div className="flex justify-center items-center gap-4">
                <img src={RightIcon} />
                <img src={LeftIcon} />
              </div>
            </div>

            <div className="w-full flex flex-row justify-center items-center gap-[8px]">
              <Day day="SAT" date="2" />
              <Day day="SUN" date="3" />
              <Day day="MON" date="4" />
              <Day day="TUE" date="5" />
              <Day day="WED" date="6" />
              <Day day="THU" date="7" />
              <Day day="FRI" date="8" />
              <Day day="SAT" date="9" />
              <Day day="SUN" date="10" />
              <Day day="MON" date="11" />
            </div>

            <div className="w-full flex flex-col justify-center items-center gap-[10px]">
              <EventRow EventText="Be an IT pioneer today by getting Computer Technician Courses." />
              <EventRow EventText="Be an IT pioneer today by getting Computer Technician Courses." />
              <EventRow EventText="Be an IT pioneer today by getting Computer Technician Courses." />
              <EventRow EventText="Be an IT pioneer today by getting Computer Technician Courses." />
              <EventRow EventText="Be an IT pioneer today by getting Computer Technician Courses." />
              <EventRow EventText="Be an IT pioneer today by getting Computer Technician Courses." />
            </div>

            <p className="flex justify-center items-center gap-[5px] text-neutral-400 text-sm font-normal self-start">
              <img src={ArowRight} />
              See All
            </p>
          </div>
        </div>

        <div className="w-8/12 flex flex-col gap-8">
          <p className="text-center text-neutral-600 text-2xl leading-tight tracking-tight">
            Discussion Forums
          </p>
          <div className="flex-grow w-full p-5 bg-white rounded-[20px] shadow border border-gray-200 flex flex-col justify-center items-center gap-4">
            <ForumLine
              imageUser1={ImageUser1}
              imageUser2={ImageUser2}
              imageUser3={ImageUser3}
              imageUser4={ImageUser4}
              imageUser5={ImageUser5}
              title="Lorem, ipsum dolor sit amet consectetur adipisicing elit"
            />
            <ForumLine
              imageUser1={ImageUser2}
              imageUser2={ImageUser1}
              imageUser3={ImageUser3}
              imageUser4={ImageUser4}
              imageUser5={ImageUser5}
              title="Lorem, ipsum dolor sit amet consectetur adipisicing elit"
            />
            <ForumLine
              imageUser1={ImageUser3}
              imageUser2={ImageUser2}
              imageUser3={ImageUser1}
              imageUser4={ImageUser4}
              imageUser5={ImageUser5}
              title="Lorem, ipsum dolor sit amet consectetur adipisicing elit"
            />
            <ForumLine
              imageUser1={ImageUser4}
              imageUser2={ImageUser2}
              imageUser3={ImageUser3}
              imageUser4={ImageUser1}
              imageUser5={ImageUser5}
              title="Lorem, ipsum dolor sit amet consectetur adipisicing elit"
            />
            <ForumLine
              imageUser1={ImageUser5}
              imageUser2={ImageUser2}
              imageUser3={ImageUser3}
              imageUser4={ImageUser4}
              imageUser5={ImageUser1}
              title="Lorem, ipsum dolor sit amet consectetur adipisicing elit"
            />
            <p className="flex justify-center items-center gap-[5px] text-neutral-400 text-sm font-normal self-start">
              <img src={ArowRight} />
              View All Disscussions Categories
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
