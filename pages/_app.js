import "../styles/globals.css";

import { NextUIProvider, createTheme, Theme } from "@nextui-org/react";

const myTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      // brand colors
      // primaryLight: "#ededed",
      // primary: "#0a0a0a",
      // primaryDark: "$green600",

      gradient:
        "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
      link: "#5E1DAD",
    },
    space: {},
    fonts: {},
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
