import { useState, useRef, useEffect, useCallback } from 'react';

export const useFullPageScroll = (sections: string[]) => {
  const [currentSection, setCurrentSection] = useState(0);
  const isScrolling = useRef(false);

  const moveToSection = useCallback(
    (index: number) => {
      if (index >= 0 && index < sections.length) {
        setCurrentSection(index);
      }
    },
    [sections.length],
  );

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isScrolling.current) return;

      isScrolling.current = true;
      if (e.deltaY > 0) {
        moveToSection(currentSection + 1);
      } else {
        moveToSection(currentSection - 1);
      }

      setTimeout(() => {
        isScrolling.current = false;
      }, 1200);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentSection, moveToSection]);

  return { currentSection, moveToSection };
};
