import React, { Fragment } from "react";

import styles from "./EssentialReads.module.css";

import { Text, Button } from "@nextui-org/react";

import BookShelf from "../BookShelf/BookShelf";

export default function EssentialReads() {
  return (
    <Fragment>
      <div className={styles["essential-reads__container"]}>
        <Text h2 size={40}>
          Essential Reads
        </Text>
      </div>
      <BookShelf />
    </Fragment>
  );
}
