import { FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";
import elonTwit from "../assets/twit-elon.png";
import twit from "../assets/twit.png";
const TwitterFeed = ({ editMode }: { editMode?: boolean }) => {
  return (
    <div className="w-4/6 text-white flex flex-col ">
      <div className="flex justify-between items-center">
        <p>Twitter</p>
        {editMode && <FaPen size={14} />}
      </div>
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
