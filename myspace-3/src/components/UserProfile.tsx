import profilePic from "../assets/profile-pic.jpeg";
import { FaTelegramPlane, FaDiscord, FaTwitter } from "react-icons/fa";
const UserProfile = () => {
  return (
    <div className="bg-slate-300 h-full p-4 flex w-screen gap-4">
      <div className="flex flex-col gap-y-4 w-1/6 items-center">
        <img src={profilePic} alt="Profile pic" className="rounded-full w-56" />
        <div className="flex gap-4">
          <div className="px-3 py-2 bg-white rounded-lg">
            <FaTelegramPlane />
          </div>
          <div className="px-3 py-2 bg-white rounded-lg">
            <FaDiscord />
          </div>
          <div className="px-3 py-2 bg-white rounded-lg">
            <FaTwitter />
          </div>
        </div>
        <div className="bg-white h-96 w-full flex items-center justify-center">
          Connect Github +
        </div>
      </div>
      <div className="w-full h-screen">
        <div className="bg-white w-full h-36 flex items-center justify-center">
          {" "}
          Connect to opensea+{" "}
        </div>
        <div className="flex gap-4 pt-4">
          <div className="w-4/6 bg-white h-[487px] flex items-center justify-center">
            Twitter?
          </div>
          <div className="w-2/6 bg-white h-[487px] flex items-center justify-center">
            Who saw my profile?
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
