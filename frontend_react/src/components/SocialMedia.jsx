import React from "react";
import { BsLinkedin, BsGithub, BsYoutube } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://www.linkedin.com/in/nikoladojcinovic93/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="https://github.com/NikolaD93" target="_blank">
          <BsGithub />
        </a>
      </div>
      <div>
        <a
          href="https://www.youtube.com/channel/UCcHSX6C51HNqchQMjaHs3_A"
          target="_blank"
        >
          <BsYoutube />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
