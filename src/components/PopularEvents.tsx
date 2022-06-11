const PopularEvents = () => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-2xl">Popular events</p>
      <div className="flex flex-col gap-2">
        <div className="p-4 border gap-2 rounded-lg flex w-full">
          <img
            src="https://ethprague.com/img/ETH.b19c42e0.svg"
            alt="EthPrague"
            className="w-16"
          />
          <div className="flex flex-col items-end w-full">
            <div className="flex flex-col w-full">
              <p className="font-medium">EthPrague</p>
              <p className="text-slate-300 text-sm">
                The future is in your hands, anon!
              </p>
            </div>
            <p className="text-sm">990 registered users</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularEvents;
