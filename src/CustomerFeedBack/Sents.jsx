import { motion } from 'framer-motion';
import React from 'react';

export default function Sents(props) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        height: '100vh',
        width: '100vw',
        position: 'absolute',
        cursor: 'pointer',
      }}
    >
      <motion.div
        style={{
          background: 'white',
          border: 'none',
          borderRadius: '0.5rem',
          padding: '3rem 4rem',
        }}
        animate={{
          x: 0,
          scale: '100%',
        }}
        initial={{
          x: 700,
          scale: '0',
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
        }}
        onClick={() => props.back(false)}
      >
        <h1>Message Sent!</h1>
      </motion.div>
    </div>
  );
}
