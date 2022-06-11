import PopularEvents from "../components/PopularEvents";
import PopularGroups from "../components/PopularGroups";
import PopularUsers from "../components/PopularUsers";

const Home = () => {
  return (
    <div className="bg-black min-h-screen h-fit flex w-screen gap-4 p-4 text-white justify-center">
      <PopularGroups />
      <PopularUsers />
      <PopularEvents />
    </div>
  );
};

export default Home;
