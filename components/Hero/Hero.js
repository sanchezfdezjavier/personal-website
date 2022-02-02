import styles from "./Hero.module.css";

import { title, subtitle, showSubtitle } from "../../config";

import { Text } from "@nextui-org/react";

export default function Hero() {
  return (
    <div className={styles["main-title__container"]}>
      <Text h1 size={60} weight="bold">
        {title}
      </Text>
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
