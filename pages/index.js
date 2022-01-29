import styles from "../styles/Home.module.css";

import { Text, Button } from "@nextui-org/react";

import Avatar from "../components/Avatar/Avatar";
import Hero from "../components/Hero/Hero";
import AboutMe from "../components/AboutMe/AboutMe";

export default function Home() {
  return (
    <div className={styles["main-container"]}>
      <Avatar />
      <Hero />
      <div className={styles["main-button__container"]}>
        <a
          href="https://blog.javisanchez.me"
          className={styles["main-button__alink"]}
        >
          <Button bordered size="lg" color="black">
            My Blog
          </Button>
        </a>
      </div>
      <AboutMe />
    </div>
  );
}
