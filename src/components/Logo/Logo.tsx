import { Link } from 'react-router-dom';

import logo from '../../images/logo.webp';

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img src={logo} alt='logo'></img>
      </Link>
    </div>
  );
};

export default Logo