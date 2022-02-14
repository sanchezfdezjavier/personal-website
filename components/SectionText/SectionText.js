import React from "react";

import { Text } from "@nextui-org/react";
import { Fragment } from "react/cjs/react.production.min";

export default function SectionText(props) {
  return (
    <Fragment>
      <Text size="1.25rem">{props.children}</Text>
    </Fragment>
  );
}
