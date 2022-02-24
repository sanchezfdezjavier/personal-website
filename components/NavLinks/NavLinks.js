import { Fragment } from "react/cjs/react.production.min";

import { externalLinks } from "../../config";

import styles from "./NavLinks.module.css";

import { Button } from "@nextui-org/react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineDocumentText, HiOutlineExternalLink } from "react-icons/hi";

import { showAboutme, showBooks } from "../../config";

export default function NavLinks() {
  return (
    <Fragment>
      <ul className={styles["navbar-links__list"]}>
        {showAboutme && (
          <li className={styles["navbar-link__list-item"]}>
            <a href="#about-me-section" className={styles["navbar-link"]}>
              <Button light color="default" auto>
                About Me
              </Button>
            </a>
          </li>
        )}
        {showBooks && (
          <li className={styles["navbar-link__list-item"]}>
            <a href="#book-shelf" className={styles["navbar-link"]}>
              <Button light color="default" auto>
                Books
              </Button>
            </a>
          </li>
        )}
        <li className={styles["navbar-link__list-item"]}>
          <a href={externalLinks.github} className={styles["navbar-link"]}>
            <Button light color="default" auto>
              <AiFillGithub /> &nbsp;Github
            </Button>
          </a>
        </li>
        <li className={styles["navbar-link__list-item"]}>
          <a href={externalLinks.resume} className={styles["navbar-link"]}>
            <Button light color="default" auto>
              <HiOutlineDocumentText /> &nbsp;Resume
            </Button>
          </a>
        </li>
        <li className={styles["navbar-link__list-item"]}>
          <a href={externalLinks.linkedin} className={styles["navbar-link"]}>
            <Button light color="default" auto>
              <FaLinkedin /> &nbsp;LinkedIn
            </Button>
          </a>
        </li>
        <li className={styles["navbar-link__list-item"]}>
          <a href={externalLinks.twitter} className={styles["navbar-link"]}>
            <Button light color="default" auto>
              <FaTwitter /> &nbsp;Twitter
            </Button>
          </a>
        </li>
        <li className={styles["navbar-link__list-item"]}>
          <a href={externalLinks.blog} className={styles["navbar-link"]}>
            <Button light color="default" auto>
              Blog&nbsp; <HiOutlineExternalLink />
            </Button>
          </a>
        </li>
      </ul>
    </Fragment>
  );
}
