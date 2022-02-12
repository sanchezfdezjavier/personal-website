import { useTheme as useNextTheme } from "next-themes";
import { Switch } from "@nextui-org/react";
import { Fragment } from "react/cjs/react.production.min";

import { useTheme } from "@nextui-org/react";

export default function Navbar() {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  return (
    <Fragment>
      The current theme is: {type}
      <Switch
        checked={isDark}
        onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
      />
    </Fragment>
  );
}
