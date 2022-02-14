import { Button, Text } from "@nextui-org/react";

import styles from "./ContactMe.module.css";

import { contactMeText, contactMeButtonText } from "../../config";

import SectionTitle from "../SectionTitle/SectionTitle";
import SectionText from "../SectionText/SectionText";

export default function ContactMe() {
  return (
    <div className="section-container">
      <SectionTitle
        textColor={{
          textGradient: "45deg, $purple500 -20%, $pink500 100%",
        }}
      >
        Contact Me
      </SectionTitle>
      <div className="section-text__container">
        <SectionText>{contactMeText}</SectionText>
      </div>
      <Button shadow color="primary" auto>
        {contactMeButtonText}
      </Button>
    </div>
  );
}
