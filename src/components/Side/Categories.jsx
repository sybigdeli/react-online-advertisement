import Sale from "../../assets/icons/sale.svg";
import Discussion from "../../assets/icons/discussion.svg";
import Job from "../../assets/icons/job.svg";
import Gig from "../../assets/icons/gig.svg";
import House from "../../assets/icons/house.svg";
import SideItem from "./SideItem";
import SubCat from "./SubCat";

const itemValue = [
  {
    title: "سلام",
    icon: Sale,
    id: 1,
    sub: ["ali", "mmd", "reza"],
  },
  {
    title: "چطوری",
    icon: Discussion,
    id: 2,
    sub: ["ali", "mmd", "reza"],
  },
  {
    title: "لباس",
    icon: Job,
    id: 3,
  },
  {
    title: "کتاب",
    icon: Gig,
    id: 4,
  },
  {
    title: "شیش متری",
    icon: House,
    id: 5,
  },
];

const Categories = () => {
  return (
    <div>
      <h3 className=" p-3 text-textColor-200 font-bold">دسته بندی</h3>
      {itemValue.map((value) => (
        <SideItem
          key={value.id}
          icon={value.icon}
          title={value.title}
          subCats={
            value.sub &&
            value.sub.map((title, i) => (
              <SubCat key={`sub-cat-${i}`} title={title} />
            ))
          }
        />
      ))}
    </div>
  );
};

export default Categories;
