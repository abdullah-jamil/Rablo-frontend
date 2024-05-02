import React from "react";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import "./footer.scss";

function Footer() {
  return (
    <div className="foter">
      <h3 className="text-sm tracking-wide">
        Made by Abdullah Jamil
      </h3>

      <a
        href="https://www.linkedin.com/in/abdullah-jamill"
        rel="noreferrer"
        target="_blank"
      >
        <AiFillLinkedin className="cursor-pointer" />
      </a>

      <a
        href="https://github.com/abdullah-jamil"
        rel="noreferrer"
        target="_blank"
      >
        <AiOutlineGithub className="cursor-pointer" />
      </a>
    </div>
  )
}

export default Footer