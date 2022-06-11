import profilePic from "../assets/profile-pic.jpeg";
import {
  FaTelegramPlane,
  FaDiscord,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

import twit from "../assets/twit.png";
const UserProfile = () => {
  return (
    <div className="bg-black h-fit flex w-screen gap-4">
      <div className="flex flex-col gap-y-4 w-2/6 items-center">
        <div className="flex flex-col gap-y-4 w-full p-4 text-white">
          <img
            src={profilePic}
            alt="Profile pic"
            className="rounded-full w-80"
          />
          <div className="flex flex-col">
            <p className="text-2xl font-semibold">Anonymous</p>
            <p className="text-slate-400">@vbuterin</p>
          </div>
          <p>Developer / Bitcoin enthusiast</p>
          <div className="flex gap-4">
            <div className="px-3 py-2 border border-white rounded-lg">
              <FaGithub />
            </div>
            <div className="px-3 py-2 border border-white rounded-lg">
              <FaTelegramPlane />
            </div>
            <div className="px-3 py-2 border border-white rounded-lg">
              <FaDiscord />
            </div>
            <div className="px-3 py-2 border border-white rounded-lg">
              <FaTwitter />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p>Repositories</p>
            <div className="h-full w-full flex flex-col gap-2 items-center justify-center  text-white">
              <div className="p-4 border rounded-lg">
                <p className="font-medium">vbuterin/ethprague-mvp</p>
                <p className="text-slate-300 text-sm">
                  Frontend code for EthPrague 2022 hackathon
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <p className="font-medium">vbuterin/ethprague-mvp</p>
                <p className="text-slate-300 text-sm">
                  Frontend code for EthPrague 2022 hackathon
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <p className="font-medium">vbuterin/ethprague-mvp</p>
                <p className="text-slate-300 text-sm">
                  Frontend code for EthPrague 2022 hackathon
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full pt-4 pr-4">
        <div className="flex gap-4 pt-4">
          <div className="w-4/6 text-white flex flex-col ">
            <p>Twitter</p>
            <img src={twit} alt="twit" className="w-full h-auto" />
            <img src={twit} alt="twit" className="w-full h-auto" />
            <img src={twit} alt="twit" className="w-full h-auto" />
            <img src={twit} alt="twit" className="w-full h-auto" />
          </div>
          <div className="w-2/6 text-white flex flex-col gap-2 ">
            <p>Groups</p>
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
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
