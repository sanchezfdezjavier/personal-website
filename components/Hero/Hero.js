import styles from "./Hero.module.css";

import { Text } from "@nextui-org/react";

export default function Hero() {
  return (
    <div className={styles["main-title__container"]}>
      <Text h1 size={60} weight="bold">
        Hi, I'm Javi
      </Text>
      <div className={styles["main-title__subtitle"]}>
        <Text h3 size={20} weight="light">
          Engineer, Developer and Curious
        </Text>
      </div>
    </div>
  );
}
