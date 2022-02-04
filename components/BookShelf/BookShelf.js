import React from "react";

import styles from "./BookShelf.module.css";

import BookCover from "../BookCover/BookCover";

import { bookCovers } from "../../config";

export default function BookShelf() {
  const books = bookCovers.map((book) => {
    return <BookCover key={book.title} coverSrc={book.src} />;
  });
  return <div className={styles["book-shelf__container"]}>{books}</div>;
}
