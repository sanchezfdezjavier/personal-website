import { useTheme } from "@nextui-org/react";

import { Text } from "@nextui-org/react";
import { Fragment } from "react";

export default function SectionText(props) {
  const textColorLight = "#666666";
  const textColorDark = "#a1a1a6";
  const { isDark, type } = useTheme();
  const textColor = isDark ? textColorDark : textColorLight;

  return (
    <Fragment>
      <Text
        size="1.2rem"
        // TODO: dynamic text color -> lighter
        css={{
          color: textColor,
          letterSpacing: "1px",
        }}
      >
        {props.children}
      </Text>
    </Fragment>
  );
}

// border: 0 solid #e5e7eb;
// box-sizing: border-box;
// color: rgb(75 85 99/1);
// font-family: "Inter var",-apple-system,"system-ui","Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;
// font-size: 1.125rem;
// line-height: 1.75rem;
// margin: 1.5rem auto 0;
// max-width: 48rem;
// text-align: left;

// color: #a1a1a6;
// font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue",Helvetica,Arial,sans-serif;
// font-size: 24px;
// font-weight: 600;
// letter-spacing: .216px;
// line-height: 28px;
// margin: 0;
// padding: 0;
// text-align: left;
