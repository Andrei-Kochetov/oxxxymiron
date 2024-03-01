import { useScroll, motion, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ISection } from '../../utils/interfaces';

const Section = ({ children, className }: ISection) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 2], ['0%', '100%']);

  return (
    <section ref={ref} className={`${className}`}>
      <motion.div style={{ y: backgroundY }}>{children}</motion.div>
    </section>
  );
};

export default Section;
