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
        layout="fill"
        css={{
          "@xs": { width: "10%" },
          "@sm": { width: "10%" },
          "@md": { width: "10%" },
          "@lg": { width: "10%" },
        }}
      />
    </div>
  );
}
