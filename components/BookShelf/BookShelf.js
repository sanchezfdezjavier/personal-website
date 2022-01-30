import React from "react";

import styles from "./BookShelf.module.css";

import BookCover from "../BookCover/BookCover";

import atomic from "../../assets/books-covers/atomic-habits-cover.jpeg";
import hooked from "../../assets/books-covers/hooked-cover.jpg";
import principles from "../../assets/books-covers/principles-cover.jpeg";
import leanStartup from "../../assets/books-covers/the-lean-startup-cover.jpeg";
import zeroOne from "../../assets/books-covers/zero-to-one-cover.jpeg";

const bookCovers = [
  { title: "The Lean Startup", src: leanStartup.src },
  {
    title: "Atomic Habits",
    src: atomic.src,
  },
  { title: "Principles", src: principles.src },
  { title: "Zero to One", src: zeroOne.src },
  { title: "Hooked", src: hooked.src },
];

export default function BookShelf() {
  const books = bookCovers.map((book) => {
    return <BookCover coverSrc={book.src} />;
  });
  return <div className={styles["book-shelf__container"]}>{books}</div>;
}
