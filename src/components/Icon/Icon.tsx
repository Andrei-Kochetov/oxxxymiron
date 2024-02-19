import { IIcon } from '../../utils/interfaces';

const Icon = ({ name, className = '', size = 20 }: IIcon) => {
  return (
    <svg className={`icon icon-${name} ${className}`} style={{ width: size, height: size }}>
      <use
        xlinkHref={`${process.env.PUBLIC_URL}/images/sprite.svg#${name}`}
      ></use>
    </svg>
  );
};

export default Icon