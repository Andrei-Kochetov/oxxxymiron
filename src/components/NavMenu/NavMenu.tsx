import { NavLink } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import { MENU } from '../../utils/constants';

const NavMenu = () => {
  return (
    <nav className="nav-menu">
      {MENU.map(({ link, name }, i) => (
        <ScrollAnimation
          className="nav-menu__item"
          key={name}
          offset={0}
          animateIn="fadeIn"
          delay={i * 100}
        >
          <NavLink to={`/${link}`}>{name}</NavLink>
        </ScrollAnimation>
      ))}
    </nav>
  );
};

export default NavMenu;
