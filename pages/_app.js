import "../styles/globals.css";

import { NextUIProvider, createTheme, Theme } from "@nextui-org/react";

const myTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      // brand colors
      primaryLight: "$green200",
      primary: "#4ADE7B",
      primaryDark: "$green600",

      gradient:
        "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
      link: "#5E1DAD",

      // you can also create your own color
      myColor: "#ff4ecd",

      // ...  more colors
    },
    space: {},
    fonts: {},
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider theme={myTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
