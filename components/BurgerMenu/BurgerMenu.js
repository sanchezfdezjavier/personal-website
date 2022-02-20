import styles from "./BurgerMenu.module.css";
import { Fragment, useState } from "react";

import { Button, useTheme } from "@nextui-org/react";
import { externalLinks } from "../../config";

import { AiFillGithub } from "react-icons/ai";
import { CgMenu } from "react-icons/cg";
import {
  HiOutlineDocumentText,
  HiOutlineArrowNarrowRight,
  HiOutlineMenuAlt4,
} from "react-icons/hi";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

import { showAboutme, showBooks } from "../../config";

export default function BurgerMenu() {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const { isDark, type } = useTheme();

  const handleToggleBurger = () => {
    setBurgerOpen((prev) => !prev);
  };
  return (
    <Fragment>
      <div className={styles["burger-menu__button__container"]}>
        <Button light color="default" auto onClick={handleToggleBurger}>
          <div className={styles["burger-menu__button_span_container"]}>
            <CgMenu />
          </div>
        </Button>
      </div>
      {burgerOpen && (
        <div
          className={
            isDark
              ? `${styles["burger-menu__container"]} ${styles["burger-menu__background__color__dark"]}`
              : `${styles["burger-menu__container"]} ${styles["burger-menu__background__color__light"]}`
          }
        >
          <ul className={styles["navbar-links__list"]}>
            {showAboutme && (
              <li className={styles["navbar-link__list-item"]}>
                <a href="#about-me-section" className={styles["navbar-link"]}>
                  <Button light color="default" size="xl">
                    About Me
                  </Button>
                </a>
              </li>
            )}
            {showBooks && (
              <li className={styles["navbar-link__list-item"]}>
                <a href="#book-shelf" className={styles["navbar-link"]}>
                  <Button light color="default" size="xl">
                    Books
                  </Button>
                </a>
              </li>
            )}
            <li className={styles["navbar-link__list-item"]}>
              <a href={externalLinks.github} className={styles["navbar-link"]}>
                <Button light color="default" size="xl">
                  <AiFillGithub /> &nbsp;Github
                </Button>
              </a>
            </li>
            <li className={styles["navbar-link__list-item"]}>
              <a href={externalLinks.resume} className={styles["navbar-link"]}>
                <Button light color="default" size="xl">
                  <HiOutlineDocumentText /> &nbsp;Resume
                </Button>
              </a>
            </li>
            <li className={styles["navbar-link__list-item"]}>
              <a
                href={externalLinks.linkedin}
                className={styles["navbar-link"]}
              >
                <Button light color="default" size="xl">
                  <FaLinkedin /> &nbsp;LinkedIn
                </Button>
              </a>
            </li>
            <li className={styles["navbar-link__list-item"]}>
              <a href={externalLinks.twitter} className={styles["navbar-link"]}>
                <Button light color="default" size="xl">
                  <FaTwitter /> &nbsp;Twitter
                </Button>
              </a>
            </li>
            <li className={styles["navbar-link__list-item"]}>
              <a
                href="https://blog.javisanchez.me/"
                className={styles["navbar-link"]}
              >
                <Button light color="default" size="xl">
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
