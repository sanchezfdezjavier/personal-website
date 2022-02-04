import styles from "./Footer.module.css";

import { footerText } from "../../config";

export default function Footer() {
  return <div className={styles["footer-container"]}>{footerText}</div>;
}
