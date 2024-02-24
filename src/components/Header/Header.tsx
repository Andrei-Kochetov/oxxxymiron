import Logo from '../Logo/Logo';
import NavMenu from '../NavMenu/NavMenu';

import Socials from '../Socials/Socials';
import MobileMenu from './MobileMenu/MobileMenu';

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <NavMenu />
      <Socials />
      <MobileMenu />
    </header>
  );
};

export default Header;
