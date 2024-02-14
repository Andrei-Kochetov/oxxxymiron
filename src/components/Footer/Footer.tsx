import { FormEvent } from 'react';
import Logo from '../Logo/Logo';
import Socials from '../Socials/Socials';
import Icon from '../Icon/Icon';

const Footer = () => {
  const handleSubmit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
  };
  return (
    <footer className="footer" onSubmit={handleSubmit}>
      <form className="footer__form-subscribe">
        <label>Подписаться на новости</label>
        <input type="email" placeholder='EMEIL'/>
        <button className="button" type="submit">
          <p>ПОДПИСАТЬСЯ</p>
          <Icon name="arrow-right" />
        </button>
      </form>
      <div className="footer__logo-year">
        <Logo />
        {`OXXXYMIRON, ${new Date().getFullYear()}`}
      </div>
      <Socials />
    </footer>
  );
};

export default Footer;
