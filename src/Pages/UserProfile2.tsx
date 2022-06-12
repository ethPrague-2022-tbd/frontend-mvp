import Groups from "../components/Groups";
import SocialMedia from "../components/SocialMedia";
import Tesla from "../components/Tesla";
import TwitterFeed from "../components/TwitterFeed";
import instagram from "../assets/instagram.png";
const UserProfile2 = () => {
  return (
    <div className="bg-black h-fit flex w-screen gap-4">
      <div className="flex flex-col gap-y-4 w-2/6 items-center">
        <div className="flex flex-col gap-y-4 w-full p-4 text-white">
          <img
            src="https://pbs.twimg.com/profile_images/1529956155937759233/Nyn1HZWF_400x400.jpg"
            alt="Profile pic"
            className="rounded-full w-80"
          />
          <div className="flex flex-col">
            <p className="text-2xl font-semibold">Elon Musk</p>
            <p className="text-slate-400">@elon.musk</p>
          </div>
          <p>Doge to the moon!</p>
          <SocialMedia />
        </div>
      </div>
      <div className="w-full pt-4 pr-4">
        <div className="flex gap-4 pt-4">
          <div className="flex flex-col w-5/6 gap-y-4">
            <img src={instagram} alt="Instagram" className="w-full h-auto" />
            <Tesla />
          </div>
          <TwitterFeed />
        </div>
      </div>
    </div>
  );
};

export default UserProfile2;
