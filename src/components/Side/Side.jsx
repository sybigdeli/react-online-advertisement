import BasicAccordion from "./Accordion";
import Categories from "./Categories";
import Filter from "./Filter";

const Side = () => {
  return (
    <div className=" h-full w-full px-4 flex flex-col gap-4">
      <div>
        <Categories />
      </div>
      <div className="">
        <Filter />
      </div>

      <div className="py-6">
        <BasicAccordion />
      </div>
    </div>
  );
};

export default Side;
