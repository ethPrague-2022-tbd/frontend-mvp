import { useEffect, useState } from "react";
import { FaCheck, FaPen } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import FeedSuggestions from "../components/FeedSuggestions";
import Groups from "../components/Groups";
import Repositories from "../components/Repositories";
import SocialMedia from "../components/SocialMedia";
import TwitterFeed from "../components/TwitterFeed";
const MyFeed = () => {
  const location = useLocation();
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    setEditMode(location.pathname.includes("edit"));
  }, []);

  return (
    <div className="bg-black h-fit flex w-screen gap-4 relative text-white">
      <div className="absolute top-3 right-5">
        <button onClick={() => setEditMode((mode) => !mode)}>
          {editMode ? <FaCheck /> : <FaPen size={16} />}
        </button>
      </div>
      <div className="flex flex-col gap-y-4 w-2/6 items-center">
        <div className="flex flex-col gap-y-4 w-full p-4 ">
          <SocialMedia editMode={editMode} />
        </div>
        <Groups home editMode={editMode} />
      </div>
      <div className="w-full pt-4 pr-4">
        <div className="flex gap-4 pt-4">
          <TwitterFeed editMode={editMode} />
          <div className="w-2/6 text-white flex flex-col gap-2 ">
            <FeedSuggestions editMode={editMode} />
            <Repositories editMode={editMode} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFeed;
