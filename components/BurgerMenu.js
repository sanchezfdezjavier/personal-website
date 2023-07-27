import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { CgMenu } from "react-icons/cg";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineExternalLink, HiOutlineDocumentText } from "react-icons/hi";
import {
  externalLinks,
  showAboutme,
  showBooks,
  showResumeButton,
} from "../config";
import OutsideAlerter from "./OutsideAlerter";
import NavLink from "./NavLink";

export default function BurgerMenu() {
  const [burgerOpen, setBurgerOpen] = useState(false);

  const handleToggleBurger = () => {
    setBurgerOpen((prev) => !prev);
  };
  return (
    <div className="lg:hidden">
      <OutsideAlerter onClickOutside={() => setBurgerOpen(false)}>
        <div className="fixed right-[0.8rem] top-[0.8rem] z-[3000]">
          <button
            className="rounded-xl bg-white p-4 opacity-90  backdrop-blur-md"
            onClick={handleToggleBurger}
            aria-label="Toggle burger menu"
          >
            <CgMenu size={25} />
          </button>
        </div>
        {burgerOpen && (
          <div
            className={`fixed right-0 top-0 z-[1001] flex h-screen w-4/5 flex-col items-center justify-center bg-white p-[1rem] opacity-95 drop-shadow-2xl`}
          >
            <ul className="flex flex-col items-center">
              {showAboutme && (
                <li className="my-3">
                  <a href="#about-me-section">
                    <NavLink isMobile={true}>About Me</NavLink>
                  </a>
                </li>
              )}
              {showBooks && (
                <li className="my-3">
                  <a href="#book-shelf">
                    <NavLink isMobile={true}>Books</NavLink>
                  </a>
                </li>
              )}
              <li className="my-3">
                <a href={externalLinks.github} target="_blank" rel="noreferrer">
                  <NavLink isMobile={true} icon={<AiFillGithub />}>
                    Github
                  </NavLink>
                </a>
              </li>
              {showResumeButton && (
                <li className="my-3">
                  <a
                    href={externalLinks.resume}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <NavLink isMobile={true} icon={<HiOutlineDocumentText />}>
                      Resume
                    </NavLink>
                  </a>
                </li>
              )}
              <li className="my-3">
                <a
                  href={externalLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <NavLink isMobile={true} icon={<FaLinkedin />}>
                    LinkedIn
                  </NavLink>
                </a>
              </li>
              <li className="my-3">
                <a
                  href={externalLinks.twitter}
                  target="_blank"
                  rel="noreferrer"
                >
                  <NavLink isMobile={true} icon={<FaTwitter />}>
                    Twitter
                  </NavLink>
                </a>
              </li>
              <li className="my-3">
                <a href={externalLinks.blog} target="_blank" rel="noreferrer">
                  <NavLink isMobile={true} icon={<HiOutlineExternalLink />}>
                    Blog
                  </NavLink>
                </a>
              </li>
            </ul>
          </div>
        )}
      </OutsideAlerter>
    </div>
  );
}
