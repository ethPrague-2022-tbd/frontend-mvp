import twit from "../assets/twit.png";
const MyTwits = () => {
  return (
    <div className=" text-white flex flex-col ">
      <p>Twitter</p>
      <img src={twit} alt="twit" className="w-full h-auto" />
      <img src={twit} alt="twit" className="w-full h-auto" />
      <img src={twit} alt="twit" className="w-full h-auto" />
      <img src={twit} alt="twit" className="w-full h-auto" />
    </div>
  );
};
export default MyTwits;
