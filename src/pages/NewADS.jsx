import LandingImage from "@/assets/images/Landing.png";
import map from "@/assets/images/map.png";
import Select from "@/components/UI/Select";
import { useState } from "react";
import FormLogin from "@/components/UI/FormLogin";
import Button from "@/components/UI/Button";

function NewADS() {
  const [isSelectGrouping, setIsSelectGrouping] = useState(false);

  const handleSelectGroupingAds = (e) => {
    setIsSelectGrouping(true);

    // if (e.target.value === "خدمات") {
    //   selectedGroupingAds.current.Services =
    //     !selectedGroupingAds.current.Services;
    // } else if (e.target.value === "شغل ها") {
    //   selectedGroupingAds.current.Jobs = !selectedGroupingAds.current.Jobs;
    // } else if (e.target.value === "مسکن") {
    //   selectedGroupingAds.current.Housing =
    //     !selectedGroupingAds.current.Housing;
    // } else if (e.target.value === "برای فروش") {
    //   selectedGroupingAds.current.ForSale =
    //     !selectedGroupingAds.current.ForSale;
    // } else if (e.target.value === "انجمن") {
    //   selectedGroupingAds.current.Community =
    //     !selectedGroupingAds.current.Community;
    // }
    // console.log(selectedGroupingAds.current);
  };
  return (
    <div className="flex flex-col-reverse justify-center h-screen overflow-scroll md:overflow-hidden gap-8 md:flex-row md:justify-center md:items-center md:p-8">
      <div className="basis-1/2  rounded-lg flex flex-col flex-grow justify-center items-center gap-8 px-4 py-4 overflow-scroll md:overflow-hidden">
        <form className="flex flex-col justify-center items-center gap-5 overflow-scroll  md:overflow-hidden px-4">
          <div className="flex items-center justify-center gap-4">
            <Select
              selectId="Grouping"
              label="دسته آگهی خود را انتخاب کنید :"
              disabledOptions="دسته بندی آگهی ها"
              optionsArray={["خدمات", "شغل ها", "مسکن", "برای فروش", "انجمن"]}
              onChange={(e) => handleSelectGroupingAds(e)}
            />
          </div>
          {isSelectGrouping && (
            <>
              <div className="flex items-center justify-center gap-4">
                <Select
                  selectId="GroupingCountry"
                  label="کشور خود را انتخاب کنید :"
                  disabledOptions="مشاهده کشور ها"
                  optionsArray={["ایران", "ترکیه", "عربستان", "ایتالیا"]}
                />

                <Select
                  selectId="GroupingCity"
                  label="شهر خود را انتخاب کنید :"
                  disabledOptions="مشاهده شهر ها"
                  optionsArray={["قم", "تبریز", "تهران", "اراک", "مشهد"]}
                />
              </div>

              <div className="flex items-center justify-center gap-4">
                <FormLogin
                  inputName="ads-name"
                  label="نامی برای محصول خود انتخاب کنید :"
                  placeHolder="نام کالای خود را انتخاب کنید"
                  value=""
                />
                <FormLogin
                  inputName="ads-price"
                  label="قیمتی برای محصول خود انتخاب کنید :"
                  placeHolder="قیمت کالای خود را انتخاب کنید"
                  value=""
                />
              </div>

              <div className="flex flex-col items-center justify-center gap-4">
                <label htmlFor="description">توضیحات محصول :</label>
                <textarea
                  className="w-96 h-44 text-sm font-medium pt-3 px-2 pb-2 outline-none flex p-3 flex-col items-stretch overflow-auto border border-primary-600 rounded-3xl"
                  name="description"
                  id="description"
                  placeholder="در باره کالای خود توضیحات بیشتری با دیگران به اشتراک بگذارید"
                  value=""
                ></textarea>
              </div>

              <div className="flex flex-col items-center justify-center gap-4">
                <FormLogin
                  inputName="ads-image"
                  inputType="file"
                  label="تصاویر محصول خود را انتخاب کنید :"
                  placeHolder="انتخاب تصاویر :"
                  value=""
                />
              </div>
              <div className="relative flex w-72 h-52 overflow-hidden">
                <img src={map} className="w-full absolute rounded-2xl" />
              </div>
              <Button type="submit" variant="fill">
                ثبت آگهی
              </Button>
            </>
          )}
        </form>
      </div>

      <div className="basis-1/2 justify-center items-center self-stretch relative rounded-3xl overflow-hidden text-center hidden md:flex">
        <img
          src={LandingImage}
          className="block absolute w-full h-full object-cover object-center"
        />
        <p className="absolute font-bold text-white text-3xl">
          آگهی های خود را به سادگی به فروش بگذارید
        </p>
      </div>
    </div>
  );
}

export default NewADS;
