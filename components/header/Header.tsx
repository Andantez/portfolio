import { Logo } from "../Icons";
import NavbarList from "./NavbarList";
import { nav } from "./Header.css";
import { merriweather } from "../../lib/fonts";
const Header = (): JSX.Element => {
  return (
    <header className={merriweather.variable}>
      <nav className={nav}>
        <Logo />
        <NavbarList />
      </nav>
    </header>
  );
};

export default Header;
