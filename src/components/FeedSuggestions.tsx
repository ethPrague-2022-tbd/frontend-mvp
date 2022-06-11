import { FaPen, FaPlus } from "react-icons/fa";

const FeedSuggestions = ({ editMode }: { editMode?: boolean }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <p>Add to your feed</p>
        {editMode && <FaPen size={14} />}
      </div>
      <div className="p-4 border gap-2 rounded-lg flex w-full justify-between">
        <img
          src="https://pbs.twimg.com/profile_images/1529956155937759233/Nyn1HZWF_400x400.jpg"
          alt="Elon musk"
          className="w-16 rounded-full"
        />
        <div className="flex flex-col">
          <div className="flex gap-2 items-center">
            <p className="font-medium">Elon Musk</p>
            <p className="text-slate-300 text-sm">@elonmusk</p>
          </div>
          <p className="text-slate-300 text-sm">Doge to the moon</p>
        </div>
        <FaPlus />
      </div>

      <div className="p-4 border gap-2 rounded-lg flex w-full justify-between">
        <img
          src="https://pbs.twimg.com/profile_images/1492769623997140995/ZqNnbOD3_400x400.png"
          alt="Sam the man"
          className="w-16 rounded-full"
        />
        <div className="flex flex-col">
          <div className="flex gap-2 items-center">
            <p className="font-medium">Sam the man</p>
            <p className="text-slate-300 text-sm">@woffiss</p>
          </div>
          <p className="text-slate-300 text-sm">Schmoo to the moon</p>
        </div>
        <FaPlus />
      </div>
    </div>
  );
};

export default FeedSuggestions;
