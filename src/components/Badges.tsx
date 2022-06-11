const Badges = () => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-white">Badges</p>
      <div className="grid grid-cols-3 gap-2">
        <div className="border border-white flex rounded-full w-24 justify-center">
          <img
            src="https://ethprague.com/img/hero_4.a59266fc.webp"
            alt="EthPrague badge"
            className="max-h-24"
          />
        </div>

        <div className="border border-white flex rounded-full w-24 justify-center">
          <img
            src="https://amsterdam.ethglobal.com/img/ethamsterdam-logo.svg"
            alt="EthAmsterdam badge"
            className="max-h-24"
          />
        </div>

        <div className="border border-white flex rounded-full w-24 justify-center">
          <img
            src="https://pbs.twimg.com/profile_images/1333830155287097349/rGY9wviF_400x400.jpg"
            alt="EthGlobal badge"
            className="max-h-24 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Badges;
