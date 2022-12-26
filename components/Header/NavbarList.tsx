import { navLinks } from "../../data";
import { navList, navItem, menuBtn } from "./Header.css";
import { Menu } from "../icons";
import { NavLink } from "../ui";

const NavbarList = (): JSX.Element => {
  return (
    <ul className={navList}>
      {navLinks.map(({ label, href }) => (
        <li key={label} className={navItem}>
          <NavLink label={label} href={href} textSize="sm" />
        </li>
      ))}
      <li className={navItem}>
        <button type="button" className={menuBtn}>
          <Menu />
        </button>
      </li>
    </ul>
  );
};

export default NavbarList;
