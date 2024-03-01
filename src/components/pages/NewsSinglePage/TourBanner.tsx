import Section from '../../Section/Section';
import video from '../../../images/oxxxytour.mp4';

const TourBanner = () => {
  return (
    <Section className="tour-banner">
      <video autoPlay loop muted playsInline>
        <source src={video} type="video/mp4" />
      </video>
    </Section>
  );
};

export default TourBanner;
