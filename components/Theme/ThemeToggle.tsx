import { useState } from "react";
import { Moon, Sun } from "../Icons";
import { themeBtn } from "./Theme.css";

type Theme = "light" | "dark";

const ThemeToggle = () => {
  const [activeTheme, setActiveTheme] = useState<Theme>("light");
  const inactiveTheme = activeTheme === "light" ? "dark" : "light";
  return (
    <button
      className={themeBtn}
      type="button"
      onClick={() => setActiveTheme(inactiveTheme)}
    >
      {activeTheme === "light" ? <Sun /> : <Moon />}
    </button>
  );
};

export default ThemeToggle;
