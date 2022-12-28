import { Logo } from '../icons';
import NavbarList from './NavbarList';
import { nav, header } from './Header.css';
import { merriweather } from '../../lib/fonts';
import dynamic from 'next/dynamic';

const ThemeToggle = dynamic(() => import('../Theme'), { ssr: false });

const Header = (): JSX.Element => {
  return (
    <header className={`${merriweather.variable} ${header}`}>
      <nav className={nav}>
        <Logo />
        <NavbarList />
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Header;
