import React, { useState, useEffect, createContext } from 'react';

export const cursorContext = createContext();

const CursorProvider = ({ children }) => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  // cursor bg state
  const [cursorBG, setCursorBG] = useState('default');
  const mobileViewPortIsActive = window.innerWidth < 768;

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
    setCursorBG('none')
  }
  }, []);

  const mouseEnterHandler = () => {
    setCursorBG('text');
  };

  const mouseLeaveHandler = () => {
    setCursorBG('default');
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
      backgroundColor:"rgba(255, 255, 2555,1)",
    }
  };

  return (
    <cursorContext.Provider value={{ cursorVariants, cursorBG, mouseEnterHandler, mouseLeaveHandler }}>
      {children}
    </cursorContext.Provider>
  );
};

export default CursorProvider;
