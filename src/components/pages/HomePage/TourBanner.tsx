import Section from '../../Section/Section';
import video from '../../../images/oxxxytour.mp4';

const TourBanner = () => {
  return (
    <Section className="tour-banner">
      <div className="container">
        <video autoPlay loop muted>
          <source src={video} type="video/mp4"></source>
        </video>
      </div>
    </Section>
  );
};

export default TourBanner;
