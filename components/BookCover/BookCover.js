import React, { Fragment } from "react";

import styles from "./BookCover.module.css";

export default function BookCover(props) {
  return (
    <div className={styles["book-cover__container"]}>
      <img src={props.coverSrc} className="book-cover" width={"200px"}></img>
    </div>
  );
}
