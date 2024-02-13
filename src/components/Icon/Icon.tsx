import { IIcon } from '../../utils/interfaces';

const Icon = ({ name, width = 20, height = 20 }: IIcon) => {
  return (
    <svg className={`icon icon-${name}`} style={{ width, height }}>
      <use
        xlinkHref={`${process.env.PUBLIC_URL}/images/sprite.svg#${name}`}
      ></use>
    </svg>
  );
};

export default Icon