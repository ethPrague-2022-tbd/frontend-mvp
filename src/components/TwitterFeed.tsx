import twit from "../assets/twit.png";
import elonTwit from "../assets/twit-elon.png";
import { Link } from "react-router-dom";
const TwitterFeed = () => {
  return (
    <div className="w-4/6 text-white flex flex-col ">
      <p>Twitter</p>
      <img src={elonTwit} alt="twit" className="w-full h-auto" />
      <Link to="/user">
        <img src={twit} alt="twit" className="w-full h-auto" />
      </Link>
      <img src={elonTwit} alt="twit" className="w-full h-auto" />
      <Link to="/user">
        <img src={twit} alt="twit" className="w-full h-auto" />
      </Link>
    </div>
  );
};

export default TwitterFeed;
