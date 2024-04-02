import { MdMarkunread } from "react-icons/md";

const VertCard = () => {
  return (
    <div className="rounded-xl bg-gray-100 w-[360px]  m-auto my-10 p-4 py-6 flex flex-col gap-6 overflow-hidden">
      {/* title */}
      <div>
        <p className="text-sm text-gray-400 mb-1">Reading Task</p>
        <h2 className="text-[23px] font-semibold">
          Constructive and destructive waves
        </h2>
      </div>
      {/* list */}
      <div className="flex flex-col gap-6 ">
        <div className="flex items-center gap-1">
          <MdMarkunread size={24} />
          <p className="font-semibold ">Item</p>
        </div>
        <div className="flex items-center gap-1">
          <MdMarkunread size={24} />
          <p className="font-semibold ">Item</p>
        </div>
        <div className="flex items-center gap-1">
          <MdMarkunread size={24} />
          <p className="font-semibold ">Item</p>
        </div>
        <div className="flex items-center gap-1">
          <MdMarkunread size={24} />
          <p className="font-semibold ">Item</p>
        </div>
      </div>
      {/* button */}
      <button
        type="submit"
        className="p-4 rounded-xl text-violet-700 font-semibold bg-violet-200"
      >
        Continue
      </button>
    </div>
  );
};

export default VertCard;
