export default function FilterItems({ title, listItem }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {title}
      </label>
      <select className="block w-full border border-gray-300 rounded-md p-2">
        {listItem &&
          listItem.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
      </select>
    </div>
  );
}
