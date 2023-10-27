import CommunityImage from "@/assets/images/Community.png";
import ForSale from "@/assets/images/ForSale.png";
import Housing from "@/assets/images/Housing.png";
import Jobs from "@/assets/images/Jobs.png";
import Services from "@/assets/images/Services.png";
import ImageUser1 from "@/assets/images/user1.svg";
import ImageUser2 from "@/assets/images/user2.svg";
import ImageUser3 from "@/assets/images/user3.svg";
import ImageUser4 from "@/assets/images/user4.svg";
import ImageUser5 from "@/assets/images/user5.svg";
import RightIcon from "@/assets/icons/right.svg";
import LeftIcon from "@/assets/icons/left.svg";
import ArowRight from "@/assets/icons/arrow right.svg";
import hamburger from '@/assets/icons/hamburger.png';
import LoginIcon from '@/assets/icons/login-icon.png'
import MapPin from "@/assets/icons/map-pin.svg";

import Header from "@/components/Header";
import Search from "@/components/UI/Search";
import Category from "@/components/UI/Category";
import ForumLine from "@/components/UI/ForumLine";
import Day from "@/components/UI/Day";
import EventRow from "@/components/UI/EventRow";
import Footer from "@/components/Footer";
import City from "@/components/UI/City";
import Logo from "@/components/UI/Logo";

const categoriesItems = [
  {
    text: "انجمن",
    image: CommunityImage,
  },
  {
    text: "برای فروش",
    image: ForSale,
  },
  {
    text: "مسکن",
    image: Housing,
  },
  {
    text: "شغل ها",
    image: Jobs,
  },
  {
    text: "خدمات",
    image: Services,
  },
];
const calenderDates = [
  {
    day: "SAT",
    date: "2",
  },
  {
    day: "SUN",
    date: "3",
  },
  {
    day: "MON",
    date: "4",
  },
  {
    day: "TUE",
    date: "5",
  },
  {
    day: "WED",
    date: "6",
  },
  {
    day: "THU",
    date: "7",
  },
  {
    day: "FRI",
    date: "8",
  },
  {
    day: "SAT",
    date: "9",
  },
  {
    day: "SUN",
    date: "10",
  },
  {
    day: "MON",
    date: "11",
  },
];
const eventsText = [
  {
    eventText:
      "امروز با دریافت دوره های تکنسین کامپیوتر، پیشگام فناوری اطلاعات باشید.",
  },
  {
    eventText: "روز خوبی داشته باشید !",
  },
  {
    eventText: "تخفیف های اخر هفته در آگهی های فروش",
  },
  {
    eventText: "کاهش قیمت مسکن واگعی نیست !",
  },
  {
    eventText: "مادرش زنده است ! مادرش زنده است ! ",
  },
  {
    eventText: "خورشید پوشتش بی ماست",
  },
];
const forumContent = [
  {
    title: "هر کس هست سلام.",
    imageUser1: ImageUser1,
    imageUser2: ImageUser2,
    imageUser3: ImageUser3,
    imageUser4: ImageUser4,
    imageUser5: ImageUser5,
  },
  {
    title: "هندوانه ای که خریدم داخلش موز بود.",
    imageUser1: ImageUser1,
    imageUser2: ImageUser2,
    imageUser3: ImageUser3,
    imageUser4: ImageUser4,
    imageUser5: ImageUser5,
  },
  {
    title: "پول زور وَ ده",
    imageUser1: ImageUser1,
    imageUser2: ImageUser2,
    imageUser3: ImageUser3,
    imageUser4: ImageUser4,
    imageUser5: ImageUser5,
  },
  {
    title: "ها این که وَگویی یعنی چه",
    imageUser1: ImageUser1,
    imageUser2: ImageUser2,
    imageUser3: ImageUser3,
    imageUser4: ImageUser4,
    imageUser5: ImageUser5,
  },
  {
    title: "یکی برسه به دادم",
    imageUser1: ImageUser1,
    imageUser2: ImageUser2,
    imageUser3: ImageUser3,
    imageUser4: ImageUser4,
    imageUser5: ImageUser5,
  },
];
const HomePage = () => {
  return (
    <div>
      <header className="flex justify-between items-center py-3 px-2 md:flex-grow md:w-full">
        <button className="w-10 shadow rounded p-2 md:hidden">
          <img src={hamburger} className="w-full"/>
        </button>

        <div className="md:hidden">
          <Logo />
        </div>

        <button className="md:hidden">
          <img src={LoginIcon} />
        </button>

        <Header />
      </header>

      <section className="w-full px-10 py-20 grid grid-rows-2 gap-y-10 bg-black bg-opacity-60 bg-header-image bg-cover bg-no-repeat">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-center  md:text-right mx-auto my-0">
          <h4 className="text-white text-3xl sm:text-5xl font-normal">
            بزرگترین وب سایت
          </h4>
          <h4 className="text-purple-400 text-3xl sm:text-5xl font-bold">
            آگهی های تبلیغاتی
          </h4>
        </div>
        <div className="max-w-sm grid mx-auto my-0">
          <Search>
            <City city="Austin" country="TX USA" />
          </Search>
        </div>
      </section>

      <section className="w-full flex flex-col justify-center items-center gap-6 py-8 md:py-12 px-10 md:px-20">
        <p className="text-center text-neutral-600 font-bold text-2xl">
          برخی از دسته بندی ها
        </p>

        <div className="w-full grid gird-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {categoriesItems.map((categories, index) => (
            <Category image={categories.image} text={categories.text} />
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 xl:flex gap-y-10 xl:gap-10 justify-center items-center py-5 px-5 md:px-20 mx-auto my-0">
        <div className="grid col-span-1 xl:flex xl:flex-grow xl:flex-col gap-10 my-0 mx-auto">
          <p className="text-center text-neutral-600 font-bold text-2xl leading-tight tracking-tight">
            تقویم
          </p>

          <div className="w-full flex flex-grow flex-col p-5 bg-white rounded-2xl shadow border border-gray-200 justify-center items-center gap-4">
            <div className="w-full flex justify-between items-center">
              <p className="text-center text-neutral-600 text-lg tracking-tight">
                اکتبر 2021
              </p>
              <div className="flex justify-center items-center gap-4">
                <img src={RightIcon} />
                <img src={LeftIcon} />
              </div>
            </div>

            <div className="w-full grid grid-cols-5 grid-rows-2 justify-center items-center gap-3">
              {calenderDates.map((calender) => (
                <Day day={calender.day} date={calender.date} />
              ))}
            </div>

            <div className="w-full flex flex-col justify-center items-center gap-[10px]">
              {eventsText.map((events) => (
                <EventRow EventText={events.eventText} />
              ))}
            </div>

            <p className="flex justify-center items-center gap-[5px] text-neutral-400 text-sm font-normal self-start">
              <img src={ArowRight} />
              مشاهده همه
            </p>
          </div>
        </div>

        <div className="grid col-span-1 xl:flex xl:flex-grow xl:flex-col gap-10 my-0 mx-auto">
          <p className="text-center text-neutral-600 font-bold text-2xl leading-tight tracking-tight">
            تالارهای بحث و گفتگو
          </p>
          <div className="w-full flex flex-grow flex-col p-5 bg-white rounded-2xl shadow border border-gray-200 justify-center items-center gap-4">
            {forumContent.map((forumContents) => (
              <ForumLine
                title={forumContents.title}
                imageUser1={forumContents.imageUser1}
                imageUser2={forumContents.imageUser2}
                imageUser3={forumContents.imageUser3}
                imageUser4={forumContents.imageUser4}
                imageUser5={forumContents.imageUser5}
              />
            ))}
            <p className="flex justify-center items-center gap-[5px] text-neutral-400 text-sm font-normal self-start">
              <img src={ArowRight} />
              مشاهده همه دسته بندی های گفت و گو
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
