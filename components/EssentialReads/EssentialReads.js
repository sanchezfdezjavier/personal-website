import React, { Fragment } from "react";

import styles from "./EssentialReads.module.css";

import { Text } from "@nextui-org/react";

import BookShelf from "../BookShelf/BookShelf";

import { essentialReadsText } from "../../config";

import SectionTitle from "../SectionTitle/SectionTitle";
import SectionText from "../SectionText/SectionText";

export default function EssentialReads() {
  return (
    <Fragment>
      <div className="section-container" id="book-shelf">
        <SectionTitle>Essential Reads</SectionTitle>
        <div className="section-text__container">
          <SectionText>{essentialReadsText}</SectionText>
        </div>
      </div>
      <BookShelf />
    </Fragment>
  );
}
