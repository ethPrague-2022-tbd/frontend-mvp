import { Link } from "react-router-dom";
import profilePic from "../assets/profile-pic.jpeg";
const PopularUsers = () => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-2xl">Popular users</p>
      <Link to="/user">
        <div className="flex flex-col gap-2">
          <div className="p-4 border gap-2 rounded-lg flex w-full">
            <img
              src={profilePic}
              alt="vbutin"
              className="w-16 rounded-full h-fit"
            />
            <div className="flex flex-col w-full">
              <div className="flex flex-col">
                <div className="font-medium">Anonymous</div>
                <div className="text-sm text-slate-300">@vbuterin</div>
              </div>
              <p className="text-slate-300 text-sm">
                Developer / Bitcoin enthusiast
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PopularUsers;
