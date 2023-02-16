import React from "react";
import { BsLinkedin, BsGithub, BsYoutube } from "react-icons/bs";

const SocialMedia = () => {
  return <div className="app__social">
    <div>
        <BsLinkedin/>
    </div>
    <div>
        <BsGithub/>
    </div>
    <div>
        <BsYoutube/>
    </div>
  </div>;
};

export default SocialMedia;
