import SectionTitle from "../SectionTitle/SectionTitle";
import SectionText from "../SectionText/SectionText";

export default function AboutMe() {
  return (
    <div className="section-container" id="about-me-section">
      <SectionTitle>About Me </SectionTitle>
      <div className="section-text__container">
        <SectionText>
          Hey! My name is Javi, I have brain of an Engineer, the heart of a
          Designer, and the dreams of a founder. <br />
          <br />
          I'm a Software Engineer at Ubuntu/Canonical, developing open-source
          software for cloud-based applications using Python, Kubernetes and
          AWS. Aside from my job, I love building side-projects which involve
          design, web development, systems architecture, understanding users and
          many more. <br />
          <br />
          To recharge my batteries, I spend time outdoors surfing, skiing,
          traveling, reading and hanging out with people and friends.
        </SectionText>
      </div>
    </div>
  );
}
