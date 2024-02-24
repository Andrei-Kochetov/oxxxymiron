import { NavLink } from 'react-router-dom';
import { MENU } from '../../../utils/constants';
import Icon from '../../Icon/Icon';
import { useState } from 'react';

const MobileMenu = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleClick = () => {
    setIsOpened(!isOpened);
  };
  return (
    <div className="mobile-menu">
      <div className="mobile-menu__button" onClick={handleClick}>
        <Icon name="round-menu" size={30} className="mobile-menu__humburger" />
      </div>
      <div
        className={`mobile-menu__items-wrapper ${
          isOpened ? 'mobile-menu__items-wrapper_active' : ''
        }`}
      >
        <div className="menu-mobile__button" onClick={handleClick}>
          <Icon
            name="round-close"
            className="mobile-menu__icon-close"
            size={40}
          />
        </div>
        <ul className="mobile-menu__items">
          {MENU.map(({ link, name }) => (
            <NavLink
              to={`/${link}`}
              key={name}
              className="mobile-menu__item"
              onClick={handleClick}
            >
              {name}
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
