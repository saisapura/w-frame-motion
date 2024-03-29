import React, { useState, useEffect, createContext } from 'react';

export const cursorContext = createContext();

const CursorProvider = ({ children }) => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorBG, setCursorBG] = useState('default');
  // State to track window width, triggering re-renders on resize
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update windowWidth state on window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array because we only set this up once

  const mobileViewPortIsActive = windowWidth < 768;

  useEffect(() => {
    if (!mobileViewPortIsActive) {
      const move = (e) => {
        setCursorPos({ x: e.clientX, y: e.clientY });
      };

      window.addEventListener('mousemove', move);

      return () => {
        window.removeEventListener('mousemove', move);
      };
    } else {
      setCursorBG('none');
    }
  }, [mobileViewPortIsActive]); // Now depends on mobileViewPortIsActive

  // Handlers and cursorVariants remain unchanged...
  
  return (
    <cursorContext.Provider value={{ cursorVariants, cursorBG, mouseEnterHandler, mouseLeaveHandler }}>
      {children}
    </cursorContext.Provider>
  );
};

export default CursorProvider;
