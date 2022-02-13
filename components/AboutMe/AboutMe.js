import styles from "./AboutMe.module.css";

import { Text } from "@nextui-org/react";
import SectionTitle from "../SectionTitle/SectionTitle";

export default function AboutMe() {
  return (
    <div className="section-container">
      <SectionTitle>About Me </SectionTitle>
      <Text>
        Hello, my name is Javi. I have the brain of an engineer, the heart of a{" "}
        designer, and the dreams and passion of en entepreneur. I'm currently at
        Ubuntu/Canonical as a Software Engineer, building my full-stack skill
        set. I've always been extremely curious and passionate about learning
        new things that challenge the status quo, that's why I'm always doing
        side-projects and learning new stuff outside of work. I've won
        entrepreneurship and code hackathons, and even organized my own (+140
        attendees)! Besides, I've designed, build and piloted FPV racing drones,
        coded the LiDAR perception system of a Formula Student car and many
        more. I'm also blogging in Hashnode, creating TikTok videos and tweeting
        to share my bits of knowledge, and hopefully helping someone out there.
      </Text>
    </div>
  );
}
