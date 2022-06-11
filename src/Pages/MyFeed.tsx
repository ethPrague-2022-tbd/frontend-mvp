import FeedSuggestions from "../components/FeedSuggestions";
import Groups from "../components/Groups";
import Repositories from "../components/Repositories";
import SocialMedia from "../components/SocialMedia";
import TwitterFeed from "../components/TwitterFeed";
const MyFeed = () => {
  return (
    <div className="bg-black h-fit flex w-screen gap-4">
      <div className="flex flex-col gap-y-4 w-2/6 items-center">
        <div className="flex flex-col gap-y-4 w-full p-4 text-white">
          <img
            src="https://pwn.xyz/profiles/pwn-team/Josef.png"
            alt="Profile pic"
            className="rounded-full w-80"
          />
          <div className="flex flex-col">
            <p className="text-2xl font-semibold">Josef Je</p>
            <p className="text-slate-400">@jj</p>
          </div>
          <p>PWNer</p>
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

export default MyFeed;
