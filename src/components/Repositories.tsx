import { FaPen } from "react-icons/fa";

const Repositories = ({ editMode }: { editMode?: boolean }) => {
  return (
    <div className="flex flex-col gap-2 h-full text-white">
      <div className="flex justify-between items-center">
        <p>Repositories</p>
        {editMode && <FaPen size={14} />}
      </div>
      <div className="h-full w-full flex flex-col gap-2  text-white">
        <div className="p-4 border rounded-lg cursor-pointer">
          <p className="font-medium">vbuterin/ethprague-mvp</p>
          <p className="text-slate-300 text-sm">
            Frontend code for EthPrague 2022 hackathon
          </p>
        </div>

        <div className="p-4 border rounded-lg cursor-pointer">
          <p className="font-medium">vbuterin/ethprague-mvp</p>
          <p className="text-slate-300 text-sm">
            Frontend code for EthPrague 2022 hackathon
          </p>
        </div>

        <div className="p-4 border rounded-lg cursor-pointer">
          <p className="font-medium">vbuterin/ethprague-mvp</p>
          <p className="text-slate-300 text-sm">
            Frontend code for EthPrague 2022 hackathon
          </p>
        </div>
      </div>
    </div>
  );
};

export default Repositories;
