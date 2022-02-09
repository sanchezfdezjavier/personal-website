import styles from "./Navbar.module.css";

import { title } from "../../config";

import { AiFillGithub } from "react-icons/ai";
import {
  HiOutlineDocumentText,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

import { Button } from "@nextui-org/react";

import { externalLinks } from "../../config";
import { Fragment } from "react/cjs/react.production.min";

export default function Navbar() {
  return (
    <Fragment>
      <div className={styles["navbar-container__background"]} />
      <nav className={styles["navbar-container"]}>
        <div className={styles["navbar-brand__container"]}>
          <h1 className={styles["navbar-brand"]}>{title}</h1>
        </div>
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
      </nav>
    </Fragment>
  );
}
