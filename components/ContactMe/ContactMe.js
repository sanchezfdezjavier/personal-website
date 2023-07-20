import { Button } from "@nextui-org/react";

import { contactMeText, contactMeButtonText, contactEmail } from "../../config";

import SectionTitle from "../SectionTitle/SectionTitle";
import SectionText from "../SectionText/SectionText";

export default function ContactMe() {
  return (
    <div className="section-container">
      <SectionTitle>Contact Me</SectionTitle>
      <div className="section-text__container">
        <SectionText>{contactMeText}</SectionText>
      </div>
      <a href={`mailto:${contactEmail}`}>
        <Button shadow color="primary" auto>
          {contactMeButtonText}
        </Button>
      </a>
    </div>
  );
}
