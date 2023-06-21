import { motion } from 'framer-motion';
import React from 'react';

export default function Sents({ back, range, comment }) {
  return (
    <div
      className="d-flex justify-content-center align-items-center position-absolute cursor-pointer"
      style={{
        height: '100vh',
      }}
    >
      <motion.div
        className="bg-light rounded py-3 px-5"
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
        onClick={() => back(false)}
      >
        <h1>Message Sent...!</h1>
        <h5>Rate: {range}🌟</h5>
        <h5>Feedback: {comment.substring(0, 25)}...!</h5>
      </motion.div>
    </div>
  );
}
