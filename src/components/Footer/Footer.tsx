import Logo from '../Logo/Logo';
import Socials from '../Socials/Socials';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="form">form</div>
      <div className="footer__logo-year">
        <Logo />
        {`OXXXYMIRON, ${new Date().getFullYear()}`}
      </div>
      <Socials />
    </footer>
  );
};

export default Footer;
