import { useLayoutEffect, useState } from 'react';

const useWindowSize = () => {
  const isClient = typeof window === 'object';
  const [windowSize, setWindowSize] = useState(isClient ? window.innerWidth : undefined);

  useLayoutEffect(() => {
    const updateSize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return windowSize;
};

export default useWindowSize;
