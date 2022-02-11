import styles from "../styles/Home.module.css";
import { Fragment, useState } from "react";
import Avatar from "../components/Avatar/Avatar";
import MainButton from "../components/MainButton/MainButton";
import Hero from "../components/Hero/Hero";
import AboutMe from "../components/AboutMe/AboutMe";
import EssentialReads from "../components/EssentialReads/EssentialReads";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import BurgerMenu from "../components/BurgerMenu/BurgerMenu";
import Projects from "../components/Projects/Projects";
import ContactMe from "../components/ContactMe/ContactMe";

import {
  mainButtonText,
  showMainButton,
  showAboutme,
  showProjects,
  showBooks,
  showAvatar,
} from "../config";

export default function Home() {
  return (
    // TODO: Optimize images
    // TODO: Scroll disapear navbar brand and glass-line https://thewebdev.info/2021/09/25/how-to-detect-when-a-user-scrolls-to-bottom-of-div-with-react/#:~:text=div%20with%20React-,To%20detect%20when%20a%20user%20scrolls%20to%20bottom%20of%20div,property%20of%20the%20same%20element.&text=We%20call%20the%20useRef%20hook,inner%20div%2C%20which%20is%20scrollable.
    // TODO: functionallyti contact me section
    // TODO: Change blue bottoms to black
    <div className={styles["main-container"]}>
      <Navbar />
      {true && <BurgerMenu />}
      {showAvatar && <Avatar />}
      <Hero />
      {showMainButton && <MainButton />}
      {showAboutme && <AboutMe />}
      {showProjects && <Projects />}
      {showBooks && <EssentialReads />}
      <ContactMe />
      <Footer />
    </div>
  );
}
