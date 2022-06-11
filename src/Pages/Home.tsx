import PopularGroups from "../components/PopularGroups";
import PopularUsers from "../components/PopularUsers";

const Home = () => {
  return (
    <div className="bg-black min-h-screen h-fit flex w-screen gap-4 p-4 text-white">
      <PopularGroups />
      <PopularUsers />
    </div>
  );
};

export default Home;
