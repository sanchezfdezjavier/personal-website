import SectionTitle from "./SectionTitle";
import SectionText from "./SectionText";

export default function AboutMe() {
  return (
    <div
      className="mt-[10rem] flex w-11/12 flex-col items-start justify-center md:w-1/2"
      id="about-me-section"
    >
      <SectionTitle>About Me </SectionTitle>
      <SectionText>
        Hey! My name is Javi, I have brain of an Engineer, the heart of a
        Designer, and the dreams of a founder. <br />
        <br />
        I'm a Software Engineer at Ubuntu/Canonical, developing open-source
        software for cloud-based applications using Python, Kubernetes and AWS.
        Aside from my job, I love building side-projects which involve design,
        web development, systems architecture, understanding users and many
        more. <br />
        <br />
        To recharge my batteries, I spend time outdoors surfing, skiing,
        traveling, reading and hanging out with people and friends.
      </SectionText>
    </div>
  );
}
