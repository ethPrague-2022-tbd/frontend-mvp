import { Link } from "react-router-dom";
import { useConnect } from "wagmi";
import { WalletConnector } from "./molecules/WalletConnector";

const Topbar = () => {
  const { isConnected } = useConnect();

  return (
    <div className="flex bg-black text-white py-2 border-b border-slate-300 p-4 justify-between">
      <Link to={isConnected ? "/my-feed" : "/"}>
        <p className="text-3xl">tbd.</p>
      </Link>
      <input type="text" placeholder="search" className="p-2 w-64 text-black" />
      <div className="flex">
        <div className="px-3 py-2 flex items-center text-white border border-white">
          <WalletConnector />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
