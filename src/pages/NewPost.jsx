import LandingImage from "@/assets/images/Landing.png";
import map from "@/assets/images/map.png";
import Select from "@/components/UI/Select";
import { useRef, useState } from "react";
import { apiAddNewAds } from "@/api/user";
import FormLogin from "@/components/UI/FormLogin";
import Button from "@/components/UI/Button";

function NewPost() {
  const [isSelectGrouping, setIsSelectGrouping] = useState(false);
  const newAddData = useRef({
    Services: undefined,
    Country: undefined,
    City: undefined,
    NamePost: undefined,
    PricePost: undefined,
    DescriptionPost: undefined,
    images: [],
  });

  const handleSelectGroupingPost = (e) => {
    setIsSelectGrouping(true);
    newAddData.current.Services = e.target.value;
    console.log(newAddData.current);
  };

  const handleNewPostData = async (e) => {
    e.preventDefault();
    // try {
    //   const result = await apiAddNewPost(newAddData.current);
    //   console.log(result);
    // } catch (error) {
    //   console.log(error);
    // } finally {
    //   console.log("آگهی شما با موفقیت به اشتراک گذاشته شد !");
    // }
  };
  return (
    <div className="flex flex-col-reverse justify-center h-screen overflow-scroll md:overflow-hidden gap-8 md:flex-row md:justify-center md:items-center md:p-8">
      <div className="basis-1/2  rounded-lg flex flex-col flex-grow justify-center items-center gap-8 px-4 py-4 overflow-scroll md:overflow-hidden">
        <form
          onSubmit={handleNewPostData}
          className="flex flex-col justify-center items-center gap-5 overflow-scroll  md:overflow-hidden px-4"
        >
          <div className="flex items-center justify-center gap-4">
            <Select
              selectId="Grouping"
              label="دسته آگهی خود را انتخاب کنید :"
              disabledOptions="دسته بندی آگهی ها"
              optionsArray={["خدمات", "شغل ها", "مسکن", "برای فروش", "انجمن"]}
              onChange={(e) => handleSelectGroupingPost(e)}
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
                  onChange={(e) =>
                    (newAddData.current.Country = e.target.value)
                  }
                />

                <Select
                  selectId="GroupingCity"
                  label="شهر خود را انتخاب کنید :"
                  disabledOptions="مشاهده شهر ها"
                  optionsArray={["قم", "تبریز", "تهران", "اراک", "مشهد"]}
                  onChange={(e) => (newAddData.current.City = e.target.value)}
                />
              </div>

              <div className="flex items-center justify-center gap-4">
                <FormLogin
                  inputName="Post-name"
                  label="نامی برای محصول خود انتخاب کنید :"
                  placeHolder="نام کالای خود را انتخاب کنید"
                  value={newAddData.current.NamePost}
                  onChange={(e) =>
                    (newAddData.current.NamePost = e.target.value)
                  }
                />
                <FormLogin
                  inputName="Post-price"
                  label="قیمتی برای محصول خود انتخاب کنید :"
                  placeHolder="قیمت کالای خود را انتخاب کنید"
                  value={newAddData.current.PricePost}
                  onChange={(e) =>
                    (newAddData.current.PricePost = e.target.value)
                  }
                />
              </div>

              <div className="flex flex-col items-center justify-center gap-4">
                <label htmlFor="description">توضیحات محصول :</label>
                <textarea
                  className="w-96 h-44 text-sm font-medium pt-3 px-2 pb-2 outline-none flex p-3 flex-col items-stretch overflow-auto border border-primary-600 rounded-3xl"
                  name="description"
                  id="description"
                  placeholder="در باره کالای خود توضیحات بیشتری با دیگران به اشتراک بگذارید"
                  value={newAddData.current.DescriptionPost}
                  onChange={(e) =>
                    (newAddData.current.DescriptionPost = e.target.value)
                  }
                ></textarea>
              </div>

              <div className="flex flex-col items-center justify-center gap-4">
                <FormLogin
                  inputName="ads-image"
                  inputType="file"
                  label="تصاویر محصول خود را انتخاب کنید :"
                  placeHolder="انتخاب تصاویر :"
                  onChange={(e) => (newAddData.current.images = e.target.value)}
                />
              </div>
              <div className="relative flex w-72 h-52 overflow-hidden">
                <img src={map} className="w-full absolute rounded-2xl" />
              </div>
              <Button
                type="submit"
                variant="fill"
                onClick={handleSelectGroupingPost}
              >
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

export default NewPost;
