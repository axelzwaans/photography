import { useContext } from "react";

import { ImFacebook, ImTwitter, ImInstagram } from "react-icons/im";

import { CursorContext } from "../context/CursorContext";

const Socials = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className="hidden lg:flex ml-24"
    >
      <ul className="flex gap-x-4">
        <li>
          <a href="http://www.facebook.com" target="_blank" rel="noreferrer">
            <ImFacebook />
          </a>
        </li>
        <li>
          <a href="http://www.twitter.com" target="_blank" rel="noreferrer">
            <ImTwitter />
          </a>
        </li>
        <li>
          <a href="http://www.instagram.com" target="_blank" rel="noreferrer">
            <ImInstagram />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
