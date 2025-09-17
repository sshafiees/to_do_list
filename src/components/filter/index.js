import FilterItems from "./filteritem";
import { categories, status, priority } from "./../../constants/constants.js";

export default function Filters() {
  return (
    <div className="shadow-md bg-white border border-gray-100 rounded-md p-4 mt-5">
      <div className="grid grid-cols-4 gap-4">
        <FilterItems title="دسته بندی" listItem={categories} />
        <FilterItems title="اولویها" listItem={categories} />
        <FilterItems title="وضعیت" listItem={priority} />
        <FilterItems title="مرتب سازی" listItem={status} />
      </div>
    </div>
  );
}
