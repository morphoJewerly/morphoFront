import React from 'react';
import { useInView } from 'react-intersection-observer';

const Lazyload = ({ src, alt }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <img
      ref={ref}
      src={inView ? src : ''}
      alt={alt}
      style={{ opacity: inView ? 1 : 0, transition: 'opacity 1s' }}
    />
  );
};
export default Lazyload;