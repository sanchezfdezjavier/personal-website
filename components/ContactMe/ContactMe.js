import { Button } from "@nextui-org/react";

import styles from "./ContactMe.module.css";

import { contactMeText } from "../../config";

export default function ContactMe() {
  return (
    <div className="section-container">
      <h2 className="h2-subtitle">Contact Me</h2>
      <p className="section-text">{contactMeText}</p>
      <Button shadow color="primary" auto>
        Drop me a message
      </Button>
    </div>
  );
}
