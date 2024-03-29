import React, { useState, useEffect, createContext } from 'react';

export const cursorContext = createContext();

const CursorProvider = ({ children }) => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorBG, setCursorBG] = useState('default');
  const mobileViewPortIsActive = window.innerWidth < 768;

  useEffect(() => {
    const move = (e) => {
      if (!mobileViewPortIsActive) {
        setCursorPos({ x: e.clientX, y: e.clientY });
      }
    };

    if (!mobileViewPortIsActive) {
      window.addEventListener('mousemove', move);
    }

    return () => {
      if (!mobileViewPortIsActive) {
        window.removeEventListener('mousemove', move);
      }
    };
  }, [mobileViewPortIsActive]); // Include mobileViewPortIsActive in the dependency array

  const mouseEnterHandler = () => {
    if (!mobileViewPortIsActive) {
      setCursorBG('text');
    }
  };

  const mouseLeaveHandler = () => {
    if (!mobileViewPortIsActive) {
      setCursorBG('default');
    }
  };

  const cursorVariants = {
    default: {
      x: cursorPos.x - 16,
      y: cursorPos.y - 16,
      backgroundColor: '#0e1112',
    },
    text: {
      width: '150px',
      height: '150px',
      x: cursorPos.x - 72,
      y: cursorPos.y - 72,
      backgroundColor: '#fff',
      mixBlendMode: 'difference',
    },
    none: {
      width: 0,
      height: 0,
      backgroundColor: 'rgba(255, 255, 255, 1)',
    }
  };

  return (
    <cursorContext.Provider value={{ cursorVariants, cursorBG, mouseEnterHandler, mouseLeaveHandler }}>
      {children}
    </cursorContext.Provider>
  );
};

export default CursorProvider;
