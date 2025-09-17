import Block from '../layout/block';
import FilterItems from './filteritem';
import { categories, status, priority } from './../../constants/constants.js';

export default function Filters() {
  return (
    <Block>
      <div className="grid grid-cols-4 gap-4">
        <FilterItems title="دسته بندی" listItem={categories} />
        <FilterItems title="اولویها" listItem={categories} />
        <FilterItems title="وضعیت" listItem={priority} />
        <FilterItems title="مرتب سازی" listItem={status} />
      </div>
    </Block>
  );
}
