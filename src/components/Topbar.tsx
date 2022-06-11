import { FaCog } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="flex bg-black text-white py-2 border-b border-slate-300 p-4 justify-between">
      <p className="text-3xl">tbd</p>
      <input type="text" placeholder="search" className="p-2 w-64" />
      <div className="px-3 py-2 flex items-center">
        <FaCog size={22} />
      </div>
    </div>
  );
};

export default Topbar;
