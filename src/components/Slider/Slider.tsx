import { useEffect, useState } from 'react';
import { ISlider } from '../../utils/interfaces';
import Icon from '../Icon/Icon';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';

const Slider = ({ slides }: ISlider) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide >= slides.length - slidesPerView ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - slidesPerView : prevSlide - 1
    );
  };


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 992) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="slider">
      <div
        className="slides"
        style={{
          transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)`,
        }}
      >
        {slides.map(({ image, title, sys: { id } }, i) => (
          <ScrollAnimation
            animateIn="fadeInLeft"
            delay={i * 100}
            className="slide"
          >
            <Link to={`news/${id}`}>
              <img src={image.url} alt="image new" />
              <h3>{title}</h3>
            </Link>
          </ScrollAnimation>
        ))}
      </div>

      <div className="slider__navigation">
        <div onClick={prevSlide}>
          <Icon
            name="slider-arrow"
            className="slider__navigation-button slider__navigation-prev"
            size={32}
          />
        </div>
        <div onClick={nextSlide}>
          <Icon
            name="slider-arrow"
            size={32}
            className="slider__navigation-button slider__navigation-next"
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
