import Logo from '../Logo/Logo';
import NavMenu from '../NavMenu/NavMenu';

import Socials from '../Socials/Socials';

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <NavMenu />
      <Socials />
    </header>
  );
};

export default Header;
