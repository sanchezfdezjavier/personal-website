import styles from "./AboutMe.module.css";

import { Text } from "@nextui-org/react";

export default function AboutMe() {
  return (
    <div className="section-container">
      <h2 className="h2-subtitle">About me</h2>
      <p className="section-text">
        Hi! My name is Javi. I have the brain of an engineer, the heart of a
        designer, and the dreams and passion of en entepreneur. I'm currently at
        Ubuntu/Canonical as a Software Engineer, working to build my full-stack
        skill set. I've always been extremely curious and passionate about
        learning new things that challenge the status quo.
        <br />
        <br />
        I've won entrepreneurship and code hackathons, and even organized my own
        (+140 attendees)! Besides, I've designed, build and piloted FPV racing
        drones, coded the LiDAR perception system of a Formula Student car and
        many more.
        <br />
        <br />
        Now, I plan to become a more experience Software Engineer with strong
        basements. I'm blogging in Hashnode to improve my writing and helping
        out new devs to get in tech in Twitter and TikTok, thus stepping up my
        communication skills.
      </p>
    </div>
  );
}
