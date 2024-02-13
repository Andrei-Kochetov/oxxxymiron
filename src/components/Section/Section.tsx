import { useScroll, motion, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';
import { ISectionProps } from '../../utils/interfaces';

// TODO разобраться как работает frame motion, как переписать на чистый react/ts

const Section = ({ children, className }: ISectionProps) => {
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
