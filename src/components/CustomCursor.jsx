import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Main Dot - High precision */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%'
        }}
        animate={{
          scale: isClicked ? 0.5 : (isHovering ? 0 : 1), // Disappears on hover
          opacity: isHovering ? 0 : 1
        }}
        transition={{ duration: 0.1 }}
      />
      
      {/* Outer Ring - Visual Feedback */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-primary pointer-events-none z-[9998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%'
        }}
        animate={{
          scale: isClicked ? 0.8 : (isHovering ? 0 : 1), // Disappears on hover
          opacity: isHovering ? 0 : 1,
          borderRadius: isHovering ? "0%" : "50%",
          rotate: isClicked ? 90 : (isHovering ? 45 : 0),
          borderColor: isClicked ? "#00ff41" : (isHovering ? "#00ff41" : "rgba(0, 255, 65, 0.3)"),
          backgroundColor: isClicked ? "rgba(0, 255, 65, 0.1)" : "transparent",
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
};

export default CustomCursor;
