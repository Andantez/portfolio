import { Logo } from "../Icons";
import NavbarList from "./NavbarList";
import { nav } from "./Header.css";
import { merriweather } from "../../lib/fonts";
import ThemeToggle from "../Theme";

const Header = (): JSX.Element => {
  return (
    <header className={merriweather.variable}>
      <nav className={nav}>
        <Logo />
        <NavbarList />
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Header;
