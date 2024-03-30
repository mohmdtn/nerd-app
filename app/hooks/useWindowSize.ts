import { useLayoutEffect, useState } from 'react';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

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
