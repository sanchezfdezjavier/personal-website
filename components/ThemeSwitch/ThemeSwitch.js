import { useTheme as useNextTheme } from "next-themes";
import { Switch } from "@nextui-org/react";
import { Fragment } from "react/cjs/react.production.min";

import { useTheme } from "@nextui-org/react";

import { CgSun, CgMoon } from "react-icons/cg";
import { BsSun, BsFillMoonFill } from "react-icons/bs";

export default function Navbar() {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  return (
    <Fragment>
      <Switch
        checked={isDark}
        size="xl"
        iconOn={<BsFillMoonFill />}
        iconOff={<BsSun />}
        color="primary"
        onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
      />
    </Fragment>
  );
}
