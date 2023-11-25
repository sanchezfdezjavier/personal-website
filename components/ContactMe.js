import { contactMeText, contactMeButtonText, contactEmail } from "../config";
import Link from "next/link";
import SectionTitle from "./SectionTitle";
import SectionText from "./SectionText";

export default function ContactMe() {
  return (
    <div className="mt-[10rem] flex w-11/12 flex-col items-start justify-center md:w-1/2">
      <SectionTitle>Contact Me</SectionTitle>
      <SectionText>{contactMeText}</SectionText>
      <Link href={`mailto:${contactEmail}`}>
        <button
          className="mt-8 rounded-md bg-slate-900 p-3 text-white shadow transition-colors hover:bg-gray-800"
          aria-label="Contact me button"
        >
          {contactMeButtonText}
        </button>
      </Link>
    </div>
  );
}
