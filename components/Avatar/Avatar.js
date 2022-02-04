import avatar from "../../assets/avatar_high.jpg";

import styles from "./Avatar.module.css";

import Image from "next/image";

export default function Avatar() {
  return (
    <div className={styles["avatar-container"]}>
      <Image
        src={avatar.src}
        className={styles.avatar}
        alt="avatar"
        layout="intrinsic"
        width={200}
        height={200}
      />
    </div>
  );
}
