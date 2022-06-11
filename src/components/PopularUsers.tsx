const PopularUsers = () => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-2xl">Popular users</p>
      <div className="flex flex-col gap-2">
        <div className="p-4 border gap-2 rounded-lg flex w-full">
          <img
            src="https://miro.medium.com/max/3150/2*X_8LYIcePYE1DMhi8vcHFw.png"
            alt="the lao"
            className="w-16"
          />
          <div className="flex flex-col items-end">
            <div className="flex flex-col">
              <p className="font-medium">The Lao</p>
              <p className="text-slate-300 text-sm">
                A DAO SUPPORTING THE BLOCKCHAIN ECOSYSTEM
              </p>
            </div>
            <p className="text-sm">990 users</p>
          </div>
        </div>

        <div className="p-4 border gap-2 rounded-lg flex w-full items-center">
          <img
            src="https://daohaus.club/img/logo.png"
            alt="Daohaus"
            className="w-16 h-fit"
          />
          <div className="flex flex-col items-end w-full">
            <div className="flex flex-col w-full items-start">
              <p className="font-medium">Daohaus</p>
              <p className="text-slate-300 text-sm">
                Unlock the next tier in community cooperation
              </p>
            </div>
            <p className="text-sm">800 users</p>
          </div>
        </div>

        <div className="p-4 border gap-2 rounded-lg flex w-full">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5c598e4ebfba3e5984563a0e/1565305053540-E97I3TTHCYHFU0DMW342/meta_chill+copy.png"
            alt="Metacartel"
            className="w-16"
          />
          <div className="flex flex-col items-end w-full">
            <div className="flex flex-col w-full items-start">
              <p className="font-medium">Metacartel</p>
              <p className="text-slate-300 text-sm">El cartel de la meta</p>
            </div>
            <p className="text-sm">400 users</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularUsers;
