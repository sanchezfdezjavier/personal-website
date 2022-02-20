import { Button, useTheme } from "@nextui-org/react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin, FaPaperPlane, FaTwitter } from "react-icons/fa";
import { HiOutlineDocumentText, HiOutlineExternalLink } from "react-icons/hi";
import { useWindowScroll } from "react-use";
import { Fragment } from "react/cjs/react.production.min";
import { externalLinks, title } from "../../config";
import NavLinks from "../NavLinks/NavLinks";
import styles from "./Navbar.module.css";

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
      ? `${styles["navbar-brand"]} ${styles["navbar-brand__display"]}`
      : `${styles["navbar-brand"]}`;

  return (
    <Fragment>
      <div className={`${navbarThemeStyles} ${navbarShadowScrollStyle}`} />
      <nav className={styles["navbar-container"]}>
        <div className={styles["navbar-brand__container"]}>
          <h1 className={navbarBrandStyle}>{title}</h1>
        </div>
        <NavLinks />
      </nav>
    </Fragment>
  );
}
