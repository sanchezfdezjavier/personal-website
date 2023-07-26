import React, { Fragment } from "react";

import BookShelf from "./BookShelf";

import { essentialReadsText } from "../config";

import SectionTitle from "./SectionTitle";
import SectionText from "./SectionText";

export default function EssentialReads() {
  return (
    <Fragment>
      <div
        className="mt-[10rem] flex w-11/12 flex-col items-start justify-center md:w-1/2"
        id="book-shelf"
      >
        <SectionTitle>Essential Reads</SectionTitle>
        <SectionText>{essentialReadsText}</SectionText>
        <a
          href="https://goodreads.com/javisf"
          target="_blank"
          rel="noreferrer"
          className="mt-8 font-medium text-blue-900 hover:underline dark:text-blue-800"
        >
          Follow me on Goodreads.
        </a>
      </div>
      <BookShelf />
    </Fragment>
  );
}
