import { FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";
import { WalletConnector } from "./molecules/WalletConnector";

const Topbar = () => {
  return (
    <div className="flex bg-black text-white py-2 border-b border-slate-300 p-4 justify-between">
      <Link to="/">
        <p className="text-3xl">tbd</p>
      </Link>
      <input type="text" placeholder="search" className="p-2 w-64 text-black" />
      <div className="flex">
        <div className="px-3 py-2 flex items-center text-white border border-white">
          <WalletConnector />
          {/* Connect wallet */}
        </div>
        <div className="px-3 py-2 flex items-center">
          <FaCog size={22} />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
