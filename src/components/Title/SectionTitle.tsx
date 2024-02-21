import { ISectionTitle } from '../../utils/interfaces';

const SectionTitle = ({ children }: ISectionTitle) => {
  return <h2 className="section-title">{children}</h2>;
};

export default SectionTitle;
