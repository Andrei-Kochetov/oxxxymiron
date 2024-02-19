import Section from '../Section/Section';
import SectionTitle from '../Section/SectionTitle';
import { trackItems } from '../../utils/constants';
import Track from './Track/Track';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';

const Tracks = () => {
  return (

    <Section className="tracks">
      <SectionTitle>Релизы</SectionTitle>
      {trackItems.map((track, i) => (
        <ScrollAnimation
          animateIn={i % 2 === 0 ? 'fadeInRight' : 'fadeInLeft'}
          delay={i * 100}
          className="track-item"
          animateOnce
        >
          <Track {...track} />
        </ScrollAnimation>
      ))}
      <Link to="atracks" className="section-more-link">
        Все треки
      </Link>
    </Section>

  );
};

export default Tracks;
