import {
  FaDiscord,
  FaGithub,
  FaPen,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";

const SocialMedia = ({ editMode }: { editMode?: boolean }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <p>Quick links</p>
        {editMode && <FaPen size={14} />}
      </div>
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
    </div>
  );
};

export default SocialMedia;
