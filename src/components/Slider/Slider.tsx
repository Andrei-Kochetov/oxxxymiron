import { useState } from 'react';
import { ISlider } from '../../utils/interfaces';
import Icon from '../Icon/Icon';
import ScrollAnimation from 'react-animate-on-scroll';

const Slider = ({ slides }: ISlider) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide >= slides.length - 3 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 3 : prevSlide - 1
    );
  };
  return (
    <div className="slider">
      <div
        className="slides"
        style={{ transform: `translateX(-${currentSlide * 33.33}%)` }}
      >
        {slides.map(({ image, title }, i) => (
          <ScrollAnimation
            animateIn="fadeInLeft"
            delay={i * 100}
            className="slide"
          >
            <img src={image} alt="image new" />
            <p>{title}</p>
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
