import twit from "../assets/twit.png";

const TwitterFeed = () => {
  return (
    <div className="w-4/6 text-white flex flex-col ">
      <p>Twitter</p>
      <img src={twit} alt="twit" className="w-full h-auto" />
      <img src={twit} alt="twit" className="w-full h-auto" />
      <img src={twit} alt="twit" className="w-full h-auto" />
      <img src={twit} alt="twit" className="w-full h-auto" />
    </div>
  );
};

export default TwitterFeed;
