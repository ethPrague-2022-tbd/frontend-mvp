import { FaPlus } from "react-icons/fa";

const Groups = ({ home }: { home?: boolean }) => {
  return (
    <div className="w-full text-white flex flex-col gap-2 ">
      <div className="flex items-center justify-between">
        <p>Groups</p>
        {home && <FaPlus />}
      </div>
      <div className="p-4 border gap-2 rounded-lg flex w-full">
        <img
          src="https://miro.medium.com/max/3150/2*X_8LYIcePYE1DMhi8vcHFw.png"
          alt="the lao"
          className="w-16"
        />
        <div className="flex flex-col">
          <p className="font-medium">The Lao</p>
          <p className="text-slate-300 text-sm">
            A DAO SUPPORTING THE BLOCKCHAIN ECOSYSTEM
          </p>
        </div>
      </div>

      <div className="p-4 border gap-2 rounded-lg flex w-full">
        <img
          src="https://images.squarespace-cdn.com/content/v1/5c598e4ebfba3e5984563a0e/1565305053540-E97I3TTHCYHFU0DMW342/meta_chill+copy.png"
          alt="Metacartel"
          className="w-16"
        />
        <div className="flex flex-col">
          <p className="font-medium">Metacartel</p>
          <p className="text-slate-300 text-sm">el cartel de la meta</p>
        </div>
      </div>
    </div>
  );
};

export default Groups;
