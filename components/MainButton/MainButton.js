import { Button } from "@nextui-org/react";
import { HiOutlineExternalLink } from "react-icons/hi";

import { mainButtonText, externalLinks } from "../../config";

import styles from "./MainButton.module.css";

export default function MainButton() {
  return (
    <div className={styles["main-button__container"]}>
      <a
        href={externalLinks.blog}
        target="_blank"
        className={styles["main-button__alink"]}
      >
        <Button shadow color="primary" size="xl" ripple="true">
          {/* <div className={styles["button-content__container"]}> */}
          {mainButtonText}&nbsp;
          {/* </div> */}
          <HiOutlineExternalLink />
        </Button>
      </a>
    </div>
  );
}
