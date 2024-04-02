import { MdOpenInNew } from "react-icons/md";

const VertCardII = () => {
  return (
    <div className="w-[360px]  mb-10">
      <div
        className="bg-gray-100 flex flex-col gap-4 p-4 rounded-t-xl 
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
      </div>
      <div className="bg-gray-100 flex gap-2 items-center p-4 rounded-b-xl border-t-[0.5px]">
        <MdOpenInNew />
        <a href="#" className="font-medium text-sm">
          Share
        </a>
      </div>
    </div>
  );
};

export default VertCardII;
