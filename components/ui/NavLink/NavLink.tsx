import Link from 'next/link';
import { NavigationLinks } from '../../../data/navLinks';
import { navLink } from './NavLink.css';

interface NavLinkProps extends NavigationLinks {
  textSize?: keyof typeof navLink;
}
const NavLink = ({ label, href, textSize = 'sm' }: NavLinkProps) => {
  return (
    <Link className={navLink[textSize]} href={href} data-link="nav">
      {label}
    </Link>
  );
};

export default NavLink;
