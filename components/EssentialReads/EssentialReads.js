import React, { Fragment } from "react";

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
          <a
            href="https://goodreads.com/javisf"
            target="_blank"
            rel="noreferrer"
          >
            Find out my latest reads by following me on Goodreads.
          </a>
        </div>
      </div>
      <BookShelf />
    </Fragment>
  );
}
