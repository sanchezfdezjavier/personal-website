import styles from "./Navbar.module.css";

import { title } from "../../config";

import { AiFillGithub } from "react-icons/ai";
import {
  HiOutlineDocumentText,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

import { Button, Text } from "@nextui-org/react";

import { externalLinks } from "../../config";

export default function Navbar() {
  return (
    <nav className={styles["navbar-container"]}>
      <div className={styles["navbar-brand"]}>
        <Text h1 size={24} weight="bold">
          {title}
        </Text>
      </div>
      <div className={styles["navbar-links__container"]}>
        <ul className={styles["navbar-links__list"]}>
          <li className={styles["navbar-link__list-item"]}>
            <a href="" className={styles["navbar-link"]}>
              <Button light color="primary" auto>
                About Me
              </Button>
            </a>
          </li>
          <li className={styles["navbar-link__list-item"]}>
            <a href="" className={styles["navbar-link"]}>
              <Button light color="primary" auto>
                Books
              </Button>
            </a>
          </li>
          <li className={styles["navbar-link__list-item"]}>
            <a href={externalLinks.github} className={styles["navbar-link"]}>
              <Button light color="primary" auto>
                <AiFillGithub /> &nbsp;Github
              </Button>
            </a>
          </li>
          <li className={styles["navbar-link__list-item"]}>
            <a href={externalLinks.resume} className={styles["navbar-link"]}>
              <Button light color="primary" auto>
                <HiOutlineDocumentText /> &nbsp;Resume
              </Button>
            </a>
          </li>
          <li className={styles["navbar-link__list-item"]}>
            <a href={externalLinks.linkedin} className={styles["navbar-link"]}>
              <Button light color="primary" auto>
                <FaLinkedin /> &nbsp;LinkedIn
              </Button>
            </a>
          </li>
          <li className={styles["navbar-link__list-item"]}>
            <a href={externalLinks.twitter} className={styles["navbar-link"]}>
              <Button light color="primary" auto>
                <FaTwitter /> &nbsp;Twitter
              </Button>
            </a>
          </li>
          <li className={styles["navbar-link__list-item"]}>
            <a
              href="https://blog.javisanchez.me/"
              className={styles["navbar-link"]}
            >
              <Button light color="primary" auto>
                Blog&nbsp; <HiOutlineArrowNarrowRight />
              </Button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
