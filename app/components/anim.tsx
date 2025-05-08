'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function TypingEffect() {
  const [text, setText] = useState('');
  const fullText = "Product Developer";
  const [index, setIndex] = useState(0);
  const [isBackspacing, setIsBackspacing] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let timeout: NodeJS.Timeout;

    // Function to type the text
    const typeText = () => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      } else {
        // Wait before backspacing
        setIsWaiting(true);
        timeout = setTimeout(() => {
          setIsWaiting(false);
          setIsBackspacing(true); // Start backspacing after waiting
        }, 1500); // Wait time before backspacing (1500ms)
      }
    };

    // Function to backspace the text
    const backspaceText = () => {
      if (index > 0) {
        setText((prev) => prev.slice(0, prev.length - 1));
        setIndex(index - 1);
      } else {
        setIsBackspacing(false); // After backspacing, start typing again
      }
    };

    // Start typing or backspacing
    if (isBackspacing) {
      interval = setInterval(backspaceText, 100); // Backspacing speed (100ms)
    } else if (!isWaiting) {
      interval = setInterval(typeText, 150); // Typing speed (150ms)
    }

    // Cleanup intervals and timeouts
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [index, isBackspacing, isWaiting, fullText]);

  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-2xl  text-white"
    >
      <span>{text}</span>
      <motion.span
        className="inline-block ml-1"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.7, repeat: Infinity, repeatType: "reverse" }}
      >
        |
      </motion.span>
    </motion.h1>
  );
}
