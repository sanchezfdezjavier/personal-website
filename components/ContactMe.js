import { contactMeText, contactMeButtonText, contactEmail } from "../config";

import SectionTitle from "./SectionTitle";
import SectionText from "./SectionText";

export default function ContactMe() {
  return (
    <div className="mt-[10rem] flex w-11/12 flex-col items-start justify-center md:w-1/2">
      <SectionTitle>Contact Me</SectionTitle>
      <SectionText>{contactMeText}</SectionText>
      <a href={`mailto:${contactEmail}`}>
        <button className="mt-8 rounded-md bg-slate-900 p-3 font-medium text-white shadow-md shadow-slate-800/50 transition-all hover:-translate-y-1 hover:bg-slate-800">
          {contactMeButtonText}
        </button>
      </a>
    </div>
  );
}
