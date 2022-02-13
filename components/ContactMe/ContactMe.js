import { Button, Text } from "@nextui-org/react";

import styles from "./ContactMe.module.css";

import { contactMeText, contactMeButtonText } from "../../config";

import SectionTitle from "../SectionTitle/SectionTitle";

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
      <p className="section-text">{contactMeText}</p>
      <Text>{contactMeText}</Text>
      <Button shadow color="primary" auto>
        {contactMeButtonText}
      </Button>
    </div>
  );
}
