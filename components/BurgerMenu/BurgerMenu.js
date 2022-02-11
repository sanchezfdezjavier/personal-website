import styles from "./BurgerMenu.module.css";
import { Fragment, useState } from "react";

import { Button } from "@nextui-org/react";

import { externalLinks } from "../../config";

import { AiFillGithub } from "react-icons/ai";
import {
  HiOutlineDocumentText,
  HiOutlineArrowNarrowRight,
  HiOutlineMenuAlt4,
} from "react-icons/hi";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

export default function BurgerMenu() {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const handleToggleBurger = () => {
    setBurgerOpen((prev) => !prev);
  };
  return (
    <Fragment>
      <div className={styles["burger-menu__button__container"]}>
        <Button light color="primary" auto onClick={handleToggleBurger}>
          <div className={styles["burger-menu__button_span_container"]}>
            <HiOutlineMenuAlt4 />
          </div>
        </Button>
      </div>
      {burgerOpen && (
        <div className={styles["burger-menu__container"]}>
          <ul className={styles["navbar-links__list"]}>
            <li className={styles["navbar-link__list-item"]}>
              <a href="" className={styles["navbar-link"]}>
                <Button light color="primary" size="xl">
                  About Me
                </Button>
              </a>
            </li>
            <li className={styles["navbar-link__list-item"]}>
              <a href="" className={styles["navbar-link"]}>
                <Button light color="primary" size="xl">
                  Books
                </Button>
              </a>
            </li>
            <li className={styles["navbar-link__list-item"]}>
              <a href={externalLinks.github} className={styles["navbar-link"]}>
                <Button light color="primary" size="xl">
                  <AiFillGithub /> &nbsp;Github
                </Button>
              </a>
            </li>
            <li className={styles["navbar-link__list-item"]}>
              <a href={externalLinks.resume} className={styles["navbar-link"]}>
                <Button light color="primary" size="xl">
                  <HiOutlineDocumentText /> &nbsp;Resume
                </Button>
              </a>
            </li>
            <li className={styles["navbar-link__list-item"]}>
              <a
                href={externalLinks.linkedin}
                className={styles["navbar-link"]}
              >
                <Button light color="primary" size="xl">
                  <FaLinkedin /> &nbsp;LinkedIn
                </Button>
              </a>
            </li>
            <li className={styles["navbar-link__list-item"]}>
              <a href={externalLinks.twitter} className={styles["navbar-link"]}>
                <Button light color="primary" size="xl">
                  <FaTwitter /> &nbsp;Twitter
                </Button>
              </a>
            </li>
            <li className={styles["navbar-link__list-item"]}>
              <a
                href="https://blog.javisanchez.me/"
                className={styles["navbar-link"]}
              >
                <Button light color="primary" size="xl">
                  Blog&nbsp; <HiOutlineArrowNarrowRight />
                </Button>
              </a>
            </li>
          </ul>
        </div>
      )}
    </Fragment>
  );
}
