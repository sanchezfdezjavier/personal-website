import { externalLinks, showResumeButton } from "../config";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineDocumentText, HiOutlineExternalLink } from "react-icons/hi";
import NavLink from "./NavLink";

import { showAboutme, showBooks } from "../config";

export default function NavLinks() {
  return (
    <ul className="flex list-none items-center justify-center">
      {showAboutme && (
        <li className="mx-4">
          <a href="#about-me-section">
            <NavLink>About Me</NavLink>
          </a>
        </li>
      )}
      {showBooks && (
        <li className="mx-5">
          <a href="#book-shelf" rel="noreferrer">
            <NavLink>Books</NavLink>
          </a>
        </li>
      )}
      <li className="mx-5">
        <a href={externalLinks.github} target="_blank" rel="noreferrer">
          <NavLink icon={<AiFillGithub />}>Github</NavLink>
        </a>
      </li>
      {showResumeButton && (
        <li className="mx-5">
          <a href={externalLinks.resume} target="_blank" rel="noreferrer">
            <NavLink icon={<HiOutlineDocumentText />}>Resume</NavLink>
          </a>
        </li>
      )}
      <li className="mx-5">
        <a href={externalLinks.linkedin} target="_blank" rel="noreferrer">
          <NavLink icon={<FaLinkedin />}>LinkedIn</NavLink>
        </a>
      </li>
      <li className="mx-5">
        <a href={externalLinks.twitter} target="_blank" rel="noreferrer">
          <NavLink icon={<FaTwitter />}>Twitter</NavLink>
        </a>
      </li>
      <li className="mx-5">
        <a href={externalLinks.blog} target="_blank" rel="noreferrer">
          <NavLink icon={<HiOutlineExternalLink />}>Blog</NavLink>
        </a>
      </li>
    </ul>
  );
}
