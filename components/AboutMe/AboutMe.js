import styles from "./AboutMe.module.css";

import { Text } from "@nextui-org/react";

import SectionTitle from "../SectionTitle/SectionTitle";
import SectionText from "../SectionText/SectionText";

export default function AboutMe() {
  return (
    <div className="section-container" id="about-me-section">
      <SectionTitle>About Me </SectionTitle>
      <div className="section-text__container">
        <SectionText>
          Hey! My name is Javi, I have brain of an Engineer, the heart of a
          Designer, and the dreams and passion of a Founder. <br />
          Today, I'm a Software Engineer at Ubuntu/Canonical, developing
          open-source software mainly in Python. I spend most of time building
          side projects like this website, hopefully one of those would become a
          successful startup.
          <br />
          <br />
          To recharge my batteries and forget about work, I love going outdoors
          surfing, skiing, traveling, and hanging out with people and friends.
        </SectionText>
      </div>
    </div>
  );
}
