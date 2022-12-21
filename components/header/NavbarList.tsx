import { navLinks } from "../../data";
import Link from "next/link";
import { navList, navItem, menuBtn } from "./Header.css";
import { Menu } from "../Icons";
const NavbarList = (): JSX.Element => {
  return (
    <ul className={navList}>
      {navLinks.map(({ label, href }) => (
        <li key={label} className={navItem}>
          <Link href={href}>{label}</Link>
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
