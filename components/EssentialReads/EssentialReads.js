import React, { Fragment } from "react";

import styles from "./EssentialReads.module.css";

import { Text, Button } from "@nextui-org/react";

import BookShelf from "../BookShelf/BookShelf";

import { essentialReadsText } from "../../config";

import SectionTitle from "../SectionTitle/SectionTitle";

export default function EssentialReads() {
  return (
    <Fragment>
      <div className="section-container">
        <SectionTitle>Essential Reads</SectionTitle>
        <p className="section-text">{essentialReadsText}</p>
      </div>
      <BookShelf />
    </Fragment>
  );
}
