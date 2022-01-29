//import styles from "./Avatar.modules.css";
import avatar from "../../assets/avatar_high.jpg";
import styles from "./Avatar.module.css";

export default function Avatar() {
  return (
    <div className={styles["avatar-container"]}>
      <img src={avatar.src} className={styles.avatar} />
    </div>
  );
}
