import React from "react";

import styles from "./AboutMe.module.css";

import { Text } from "@nextui-org/react";

export default function AboutMe() {
  return (
    <div className={styles["about-me__container"]}>
      <Text h2 size={40}>
        About me
      </Text>
      <p className={styles["about-me__text"]}>
        Culpa enim anim magna ex cillum cillum non ex consequat officia laboris
        ipsum nulla. Voluptate minim ipsum dolore qui excepteur voluptate. Et
        sit enim commodo minim non et ex sit consectetur voluptate. Do nostrud
        nostrud veniam incididunt incididunt cillum non. Culpa enim anim magna
        ex cillum cillum non ex consequat officia laboris ipsum nulla. Voluptate
        minim ipsum dolore qui excepteur voluptate. Et sit enim commodo minim
        non et ex sit consectetur voluptate. Do nostrud nostrud veniam
        incididunt incididunt cillum non.
      </p>
    </div>
  );
}
