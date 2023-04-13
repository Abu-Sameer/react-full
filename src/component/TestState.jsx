import React, { useState } from 'react';
const btn = {
  padding: '0.7rem 1rem',
  backgroundColor: 'navy',
  color: 'white',
  border: 'none',
  borderRadius: '0.3rem',
  fontSize: '1rem',
  cursor: 'pointer',
  margin: '1rem',
};

export default function TestState() {
  const [current, setCurrent] = useState(1500);

  return (
    <div>
      <h1>State Hooks</h1>
      <h2>Company current account balance: ${current}</h2>
      <button style={btn} onClick={() => setCurrent(current - 10)}>
        buy
      </button>
      <button style={btn} onClick={() => setCurrent(current + 10)}>
        sold
      </button>
      <button style={btn} onClick={() => setCurrent(current + 2000)}>
        star
      </button>
    </div>
  );
}
