import profilePic from "../assets/profile-pic.jpeg";
import FeedSuggestions from "../components/FeedSuggestions";
import Groups from "../components/Groups";
import Repositories from "../components/Repositories";
import SocialMedia from "../components/SocialMedia";
import TwitterFeed from "../components/TwitterFeed";
const Home = () => {
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
          <SocialMedia />
          <Groups home />
        </div>
      </div>
      <div className="w-full pt-4 pr-4">
        <div className="flex gap-4 pt-4">
          <TwitterFeed />
          <div className="w-2/6 text-white flex flex-col gap-2 ">
            <FeedSuggestions />
            <Repositories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
