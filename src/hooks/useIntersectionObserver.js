import { useState, useRef, useEffect, useCallback } from 'react';

const useIntersectionObserver = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);
  const setRef = useCallback((node) => {
    ref.current = node;
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    };

    const handleObserver = (entities) => {
      const target = entities[0];
      setIsIntersecting(target.isIntersecting);
    };

    const observer = new IntersectionObserver(handleObserver, options);

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return [setRef, isIntersecting];
};

export default useIntersectionObserver;
