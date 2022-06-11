import React from "react";
import {
  FaGithub,
  FaTelegramPlane,
  FaDiscord,
  FaTwitter,
} from "react-icons/fa";

const SocialMedia = () => {
  return (
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
  );
};

export default SocialMedia;
