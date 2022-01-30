import React from "react";

import styles from "./EssentialReads.module.css";

import { Text, Button } from "@nextui-org/react";

export default function EssentialReads() {
  return (
    <div className={styles["essential-reads__container"]}>
      <Text h2 size={40}>
        Essential Reads
      </Text>
    </div>
  );
}
