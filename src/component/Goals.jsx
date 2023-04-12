import React, { useState } from 'react';

const sty = {
  padding: '0.5rem',
  margin: '1rem',
  border: '2px solid navy',
  borderRadius: '0.3rem',
  fontSize: '1rem',
};

const btn = {
  padding: '0.7rem 1rem',
  backgroundColor: 'navy',
  color: 'white',
  border: 'none',
  borderRadius: '0.3rem',
  fontSize: '1rem',
  cursor: 'pointer',
};

const h1 = {
  color: 'navy',
  margin: '0.8rem 0 1rem 8rem',
};

const cont = {
  width: '30%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
};

export default function Goals(props) {
  const addDuaa = props.addGoals;

  const [mind, mindSet] = useState({
    prayer: '',
    achieve: '',
  });

  function handleChange(e) {
    mindSet({ ...mind, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addDuaa(mind);
    mindSet({ prayer: '', achieve: '' });
  };
  return (
    <div>
      <h1 style={h1}>My Goals</h1>
      <form style={cont} onSubmit={handleSubmit}>
        <input
          style={sty}
          type="text"
          name="prayer"
          placeholder="Prayer"
          value={mind.prayer}
          onChange={handleChange}
        />
        <input
          style={sty}
          type="text"
          name="achieve"
          placeholder="Achieve"
          value={mind.achieve}
          onChange={handleChange}
        />
        <button style={btn}>My Dua'a</button>
      </form>
    </div>
  );
}
