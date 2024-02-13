//import video from '../../images/text.webm';
import Icon from '../Icon/Icon';
import Section from '../Section/Section';
import oxxxyTourImg from '../../images//oxxxytour.png';
import ScrollAnimation from 'react-animate-on-scroll';
// TODO почему лагает видео с текстом (весит всего 560 кб)

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
