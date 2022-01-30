import styles from "./Navbar.module.css";

import { AiFillGithub } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";
import { BsBook } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

import { Button } from "@nextui-org/react";

import { externalLinks } from "../../constants";

export default function Navbar() {
  return (
    <nav className={styles["navbar-container"]}>
      <div className={styles["navbar-links__container"]}>
        <ul className={styles["navbar-links__list"]}>
          <li className={styles["navbar-link__list-item"]}>
            <a href={externalLinks.github} className={styles["navbar-link"]}>
              <Button flat color="black" auto>
                <AiFillGithub /> &nbsp;Github
              </Button>
            </a>
          </li>
          <li className={styles["navbar-link__list-item"]}>
            <a href={externalLinks.resume} className={styles["navbar-link"]}>
              <Button flat color="black" auto>
                <HiOutlineDocumentText /> &nbsp;Resume
              </Button>
            </a>
          </li>
          <li className={styles["navbar-link__list-item"]}>
            <a href={externalLinks.linkedin} className={styles["navbar-link"]}>
              <Button flat color="black" auto>
                <FaLinkedin /> &nbsp;LinkedIn
              </Button>
            </a>
          </li>
          <li className={styles["navbar-link__list-item"]}>
            <a
              href="https://blog.javisanchez.me/"
              className={styles["navbar-link"]}
            >
              <Button flat color="black" auto>
                Blog
              </Button>
            </a>
          </li>
          <li className={styles["navbar-link__list-item"]}>
            <a href="" className={styles["navbar-link"]}>
              <Button flat color="black" auto>
                About Me
              </Button>
            </a>
          </li>
          <li className={styles["navbar-link__list-item"]}>
            <a href="" className={styles["navbar-link"]}>
              <Button flat color="black" auto>
                <BsBook /> &nbsp;Books
              </Button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
