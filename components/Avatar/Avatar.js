import { avatarSrc } from "../../config";

import styles from "./Avatar.module.css";

import Image from "next/image";

export default function Avatar() {
  return (
    <div className={styles["avatar-container"]}>
      <Image
        src={avatarSrc}
        className={styles.avatar}
        alt="avatar"
        layout="fill"
      />
    </div>
  );
}
