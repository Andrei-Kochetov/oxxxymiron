import Section from '../../Section/Section';
import oxxxyTourImg from '../../../images/oxxxytour.png';
import ScrollAnimation from 'react-animate-on-scroll';

const MainBanner = () => {
  return (
    <Section>
      <div className="container">
        <h1 style={{ fontSize: 0, lineHeight: 0 }}>OXXXYMIRON</h1>
        <div className="main-banner">
          <ScrollAnimation animateIn="fadeInRight" animateOnce>
            <img src={oxxxyTourImg} alt="oxxxy tour image" />
          </ScrollAnimation>
        </div>
      </div>
    </Section>
  );
};

export default MainBanner;
