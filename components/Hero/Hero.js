import styles from "./Hero.module.css";

import { title, subtitle, showSubtitle } from "../../config";

import { Text } from "@nextui-org/react";

export default function Hero() {
  return (
    <div className={styles["main-title__container"]}>
      <h1 className={styles["main-title"]}>{title}</h1>
      {showSubtitle && (
        <div className={styles["main-title__subtitle"]}>
          <Text h3 size={25} weight="light">
            {subtitle}
          </Text>
        </div>
      )}
    </div>
  );
}
