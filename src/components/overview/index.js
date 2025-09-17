import NumberBlock from "./numberBlock";

export default function Overview() {
  return (
    <div className="shadow-md bg-white border border-gray-100 rounded-md p-4 mt-5">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">خلاصه کارها</h2>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <NumberBlock number={12} title="در حال انتظار" color="blue" />
        <NumberBlock number={5} title="در حال انجام" color="yellow" />
        <NumberBlock number={3} title="انجام شده" color="green" />
        <NumberBlock number={20} title="مجموع" color="red" />
      </div>
    </div>
  );
}
