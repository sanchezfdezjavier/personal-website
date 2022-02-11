import { Button } from "@nextui-org/react";

import styles from "./ContactMe.module.css";

import { contactMeText, contactMeButtonText } from "../../config";

export default function ContactMe() {
  return (
    <div className="section-container">
      <h2 className="h2-subtitle">Contact Me</h2>
      <p className="section-text">{contactMeText}</p>
      <div className="copy-field"></div>
      <Button shadow color="primary" auto>
        {contactMeButtonText}
      </Button>
    </div>
  );
}
