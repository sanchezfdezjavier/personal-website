import styles from "./BookCover.module.css";

import bookCoverOverlay from "../../assets/books-covers/book-overlay.png";

import Image from "next/image";

export default function BookCover(props) {
  return (
    <div className={styles["book__container"]}>
      <div className={styles["book-cover__container"]}>
        <Image
          src={props.coverSrc}
          className={styles.avatar}
          alt="avatar"
          layout="intrinsic"
          width={200}
          height={300}
        />
      </div>
      <div className={styles["book-cover__container__overlay"]}>
        <Image
          src={bookCoverOverlay.src}
          className={styles.avatar}
          alt="avatar"
          layout="intrinsic"
          width={200}
          height={300}
        />
      </div>
    </div>
  );
}
