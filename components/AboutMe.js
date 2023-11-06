import SectionTitle from "./SectionTitle";
import SectionText from "./SectionText";
import Link from "next/link";

export default function AboutMe() {
  return (
    <div
      className="mt-[10rem] flex w-11/12 flex-col items-start justify-center md:w-1/2"
      id="about-me-section"
    >
      <SectionTitle>About Me </SectionTitle>
      <SectionText>
        Hey! My name is Javi, I have brain of an Engineer, the heart of a
        Designer, and the dreams of a founder. Currently I'm a{" "}
        <span className="font-bold"> Founding Engineer </span>
        at{" "}
        <Link
          target="_blank"
          className="font-medium underline transition-colors hover:text-black"
          href="https://stack-ai.com/"
        >
          Stack AI
        </Link>
        , developing the next generation no-code AI tools.
        <br />
        <br />
        To recharge my batteries, I spend time outdoors surfing, skiing,
        traveling, reading and hanging out with people and friends.
      </SectionText>
    </div>
  );
}
