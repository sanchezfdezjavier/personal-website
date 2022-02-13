import { Button } from "@nextui-org/react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import { mainButtonText } from "../../config";

import styles from "./MainButton.module.css";

export default function MainButton() {
  return (
    <div className={styles["main-button__container"]}>
      <a
        href="https://blog.javisanchez.me"
        className={styles["main-button__alink"]}
      >
        <Button shadow color="primary" size="xl" ripple="true">
          {/* <div className={styles["button-content__container"]}> */}
          {mainButtonText}&nbsp;
          {/* </div> */}
          <HiOutlineArrowNarrowRight />
        </Button>
      </a>
    </div>
  );
}
