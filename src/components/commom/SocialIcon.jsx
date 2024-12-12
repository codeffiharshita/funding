import React from "react";
import {
  DiscordSvg,
  FacebookSvg,
  InstagramSvg,
  LinkedInSvg,
  TwitterSvg,
  YoutubeSvg
} from "../svg";

const SocialIcon = ({ color }) => {
  return (
    <div className="d-flex justify-content-center social-link align-items-center">
      <a href="#discord" className="text-white">
        <DiscordSvg color={color} />
      </a>
      <a href="#facebook" className="text-white">
        <FacebookSvg color={color} />
      </a>
      <a href="#instagram" className="text-white">
        <InstagramSvg color={color} />
      </a>
      <a href="#linkedin" className="text-white">
        <LinkedInSvg color={color} />
      </a>
      <a href="#youtube" className="text-white">
        <YoutubeSvg color={color} />
      </a>
      <a href="#email" className="text-white">
        <TwitterSvg color={color} />
      </a>
    </div>
  );
};

export default SocialIcon;
