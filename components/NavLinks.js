import { externalLinks, showResumeButton } from "../config";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineDocumentText, HiOutlineExternalLink } from "react-icons/hi";
import NavLink from "./NavLink";
import Link from 'next/link';
import { showAboutme, showBooks } from "../config";

export default function NavLinks() {
  return (
    <ul className="flex list-none items-center justify-center">
      {showAboutme && (
        <li className="mx-4">
          <Link href="#about-me-section">
            <NavLink>About Me</NavLink>
          </Link>
        </li>
      )}
      {showBooks && (
        <li className="mx-5">
          <Link href="#book-shelf" rel="noreferrer">
            <NavLink>Books</NavLink>
          </Link>
        </li>
      )}
      <li className="mx-5">
        <Link href={externalLinks.github} target="_blank" rel="noreferrer">
          <NavLink icon={<AiFillGithub />}>Github</NavLink>
        </Link>
      </li>
      {showResumeButton && (
        <li className="mx-5">
          <Link href={externalLinks.resume} target="_blank" rel="noreferrer">
            <NavLink icon={<HiOutlineDocumentText />}>Resume</NavLink>
          </Link>
        </li>
      )}
      <li className="mx-5">
        <Link href={externalLinks.linkedin} target="_blank" rel="noreferrer">
          <NavLink icon={<FaLinkedin />}>LinkedIn</NavLink>
        </Link>
      </li>
      <li className="mx-5">
        <Link href={externalLinks.twitter} target="_blank" rel="noreferrer">
          <NavLink icon={<FaTwitter />}>Twitter</NavLink>
        </Link>
      </li>
      <li className="mx-5">
        <Link href={externalLinks.blog} target="_blank" rel="noreferrer">
          <NavLink icon={<HiOutlineExternalLink />}>Blog</NavLink>
        </Link>
      </li>
    </ul>
  );
}
