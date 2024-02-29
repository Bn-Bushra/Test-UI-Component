import { MdOpenInNew } from "react-icons/md";

const VertCardII = () => {
  return (
    <div className="rounded-xl bg-gray-100 w-[360px] m-auto my-10 px-4 py-6 space-y-6">
      <div
        className="flex flex-col gap-4
      "
      >
        <h3 className="font-semibold">Constructive and destructive waves</h3>
        <p className=" text-gray-600 text-sm">$39 / person</p>
        <button
          type="submit"
          className="bg-violet-600 w-fit text-white text-sm p-3 rounded-lg font-semibold"
        >
          Choose
        </button>
        <hr className="overflow-visible" />
      </div>
      <div className="flex gap-2 items-center ">
        <MdOpenInNew />
        <a href="#" className="font-medium text-sm">
          Share
        </a>
      </div>
    </div>
  );
};

export default VertCardII;
