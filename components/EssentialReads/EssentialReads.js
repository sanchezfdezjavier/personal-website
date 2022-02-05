import React, { Fragment } from "react";

import styles from "./EssentialReads.module.css";

import { Text, Button } from "@nextui-org/react";

import BookShelf from "../BookShelf/BookShelf";

import { essentialReadsText } from "../../config";

export default function EssentialReads() {
  return (
    <Fragment>
      <div className="section-container">
        <h2 className="h2-subtitle">Essential Reads</h2>
        <p className="section-text">{essentialReadsText}</p>
      </div>
      <BookShelf />
    </Fragment>
  );
}
