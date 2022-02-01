import styles from "../styles/Home.module.css";

import { Button } from "@nextui-org/react";

import Avatar from "../components/Avatar/Avatar";
import Hero from "../components/Hero/Hero";
import AboutMe from "../components/AboutMe/AboutMe";
import EssentialReads from "../components/EssentialReads/EssentialReads";
import BookShelf from "../components/BookShelf/BookShelf";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function Home() {
  return (
    <div className={styles["main-container"]}>
      <Navbar />
      <Avatar />
      <Hero />
      <div className={styles["main-button__container"]}>
        <a
          href="https://blog.javisanchez.me"
          className={styles["main-button__alink"]}
        >
          <Button color="primary" size="lg">
            My Blog&nbsp;
            <HiOutlineArrowNarrowRight />
          </Button>
        </a>
      </div>
      <AboutMe />
      <EssentialReads />
      <BookShelf />
      <Footer />
    </div>
  );
}
