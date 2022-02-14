import styles from "./Navbar.module.css";

import { Button } from "@nextui-org/react";

import { useTheme } from "@nextui-org/react";

import { useWindowScroll } from "react-use";

import { title } from "../../config";

import { AiFillGithub } from "react-icons/ai";
import {
  HiOutlineDocumentText,
  HiOutlineArrowNarrowRight,
  HiOutlineExternalLink,
} from "react-icons/hi";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

import { externalLinks } from "../../config";
import { Fragment } from "react/cjs/react.production.min";

export default function Navbar() {
  const { isDark, type } = useTheme();
  const { _, y } = useWindowScroll();

  const navbarThemeStyles = isDark
    ? `${styles["navbar-container__background"]} ${styles["navbar-container__background__color__dark"]}`
    : `${styles["navbar-container__background"]} ${styles["navbar-container__background__color__light"]}`;

  const navbarShadowScrollStyle =
    y !== 0 ? `${styles["navbar-container__shadow"]}` : "";

  const navbarBrandStyle =
    y >= 400
      ? `${styles["navbar-brand__container"]} ${styles["navbar-brand__display"]}`
      : `${styles["navbar-brand__container"]}`;

  return (
    <Fragment>
      <div className={`${navbarThemeStyles} ${navbarShadowScrollStyle}`} />
      <nav className={styles["navbar-container"]}>
        <div className={navbarBrandStyle}>
          <h1 className={styles["navbar-brand"]}>{title}</h1>
        </div>
        <ul className={styles["navbar-links__list"]}>
          <li className={styles["navbar-link__list-item"]}>
            <a href="" className={styles["navbar-link"]}>
              <Button light color="default" auto>
                About Me
              </Button>
            </a>
          </li>
          <li className={styles["navbar-link__list-item"]}>
            <a href="" className={styles["navbar-link"]}>
              <Button light color="default" auto>
                Books
              </Button>
            </a>
          </li>
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
            <a
              href="https://blog.javisanchez.me/"
              className={styles["navbar-link"]}
            >
              <Button light color="default" auto>
                Blog&nbsp; <HiOutlineExternalLink />
              </Button>
            </a>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
}
